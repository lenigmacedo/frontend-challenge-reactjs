/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { Modal } from '../../components/Modal';
import { handlePeople } from '../../store/actions/people';
import { IPeople } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardPeople } from './commom';
import { NewPeople } from './styled';
import { Input } from '../../components/Input';

export const PeoplePage: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const people = useSelector((state: IReduxState) => state.people.results);
  const [showModal, setShowModal] = useState<boolean>(false);
  const formRef = useRef(null);

  interface IFormData {
    nome: string;
    peso: number;
    massa: number;
    cor_cabelo: string;
    cor_pele: string;
    cor_olho: string;
    data_nascimento: Date;
    genero: string;
    planeta: string;
    filme: string;
    veiculo: string;
    espaconave: string;
  }

  const getPeople = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handlePeople(page, search, id));

    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  const handleFormSubmit = async (data: IFormData): Promise<void> => {
    // @ts-ignore
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório'),
        peso: Yup.number()
          .required('O peso é obrigatório')
          .typeError('O peso deve ser um número'),
        massa: Yup.number()
          .required('A massa é obrigatória')
          .typeError('A massa deve ser um número'),
        cor_cabelo: Yup.string().required('A cor de cabelo é obrigatório'),
        cor_pele: Yup.string().required('A cor de pele é obrigatório'),
        cor_olho: Yup.string().required('A cor de olho é obrigatório'),
        data_nascimento: Yup.string()
          .required('A data de nascimento é obrigatória')
          .matches(
            /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
            'Data inválida'
          ),

        genero: Yup.string().required('O gênero é obrigatório'),
        planeta: Yup.string().required('O planeta é obrigatório'),
        filme: Yup.string().required('O filme é obrigatório'),
        veiculo: Yup.string().required('O veículo é obrigatório'),
        espaconave: Yup.string().required('A espaçonave é obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      setShowModal(false);
      toast.success('Pessoa cadastrada com sucesso!');
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            // @ts-ignore
            validationErrors[error.path] = error.message;
          }
        });

        if (formRef.current) {
          // @ts-ignore
          formRef.current.setErrors(validationErrors);
        }
      }
    }
  };

  useEffect(() => {
    getPeople(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getPeople(true, true);
      }}
      onNextPage={() => getPeople(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getPeople(false, false);
          return;
        }
        getPeople();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <Modal isOpen={showModal} onBackgroundClick={() => setShowModal(false)}>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <Input name="nome" type="text" label="Nome" />
          <Input name="peso" type="text" label="Peso" />
          <Input name="massa" type="text" label="Massa" />
          <Input name="cor_cabelo" type="text" label="Cor do Cabelo" />
          <Input name="cor_pele" type="text" label="Cor da Pele" />
          <Input name="cor_olho" type="text" label="Cor do Olho" />
          <Input
            name="data_nascimento"
            type="date"
            label="Data de Nascimento"
          />
          <Input name="genero" type="text" label="Gênero" />
          <Input name="planeta" type="text" label="Planeta" />
          <Input name="filme" type="text" label="Filme" />
          <Input name="veiculo" type="text" label="Veículo" />
          <Input name="espaconave" type="text" label="Espaçonave" />

          <footer>
            <button type="submit">Salvar</button>
          </footer>
        </Form>
      </Modal>

      <NewPeople onClick={() => setShowModal(true)}>
        <p>+</p>
      </NewPeople>

      <GridView>
        {people.map((peopleObj: IPeople) => {
          return <CardPeople people={peopleObj} />;
        })}
      </GridView>
    </Container>
  );
};
