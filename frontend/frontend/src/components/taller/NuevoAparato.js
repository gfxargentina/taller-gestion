import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { startAddNewAparato } from '../../actions/aparatos';
import DatePicker, { registerLocale } from 'react-datepicker';
import tvModels from '../../helpers/tv-models';
import Select from 'react-select';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('es-ES', es);

const options = [
  { value: 'sinAccesorios', label: 'Sin Accesorios' },
  { value: 'controlRemoto', label: 'Con Control Remoto' },
  { value: 'base', label: 'Con Base' },
  { value: 'patas', label: 'Con Patas' },
  { value: 'cable220', label: 'Con Cable 220v' },
  { value: 'cableRca', label: 'Con Cable RCA' },
  { value: 'fuente', label: 'Con Fuente 220v' },
];

export const NuevoAparato = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newAparato, handleNewAparatoInput] = useForm({
    fechaEntrada: '',
    fechaSalida: '',
    aparato: '',
    falla: '',
    presupuesto: '',
    accesorios: '',
    observaciones: '',
    precio: '',
    garantia: '',
  });

  const { aparato, falla, observaciones } = newAparato;

  //DatePicker
  const [selectedDate, setSelectedDate] = useState('');
  const datePicker = (date) => {
    setSelectedDate(date);

    newAparato.fechaEntrada = `${date}`;
  };

  //react-select
  const handleSelectTV = (e) => {
    newAparato.aparato = e.label;
  };

  const handleSelect = (e) => {
    newAparato.accesorios = e;
  };

  const handleNewAparato = (e) => {
    e.preventDefault();

    dispatch(startAddNewAparato(newAparato));
    Swal.fire({
      icon: 'success',
      title: 'OK',
      text: 'Se registro un nuevo aparato',
    });

    history.push('/');
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center">
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
                    flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Registre un nuevo Aparato
            </h1>

            <form className="mt-6" onSubmit={handleNewAparato}>
              <div className="mb-4">
                <label className="block text-gray-700">Fecha de entrada</label>
                {/* <input 
                            type="text" 
                            name="fechaEntrada"
                            value={ fechaEntrada }
                            onChange={ handleNewAparatoInput }
                            placeholder="ingrese fecha de entrada del aparato" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required /> */}
                <DatePicker
                  locale="es-ES"
                  selected={selectedDate}
                  onChange={datePicker}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Seleccione una Fecha"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Aparato</label>
                <Select
                  isSearchable
                  options={tvModels}
                  onChange={handleSelectTV}
                  placeholder="Seleccione el modelo de Televisor"
                />
                {/* <input
                  type="text"
                  name="aparato"
                  value={aparato}
                  onChange={handleNewAparatoInput}
                  placeholder="ingrese marca y modelo del aparato"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                /> */}
              </div>
              {/* <div>
                        <label className="block text-gray-700">Fecha de Entregado</label>
                        <input 
                            type="text" 
                            name="fechaSalida" 
                            value={ fechaSalida }
                            onChange={  handleNewAparatoInput }
                            placeholder="ingrese Fecha de Entregado" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete  />
                    </div> */}

              <div class="mt-4">
                <label className="block text-gray-700">Falla</label>
                <textarea
                  type="text"
                  name="falla"
                  value={falla}
                  onChange={handleNewAparatoInput}
                  placeholder="ingrese la falla del aparato"
                  minlength="6"
                  class="w-full h-24 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"
                />
              </div>

              <label className="block text-gray-700 mb-2">Accesorios</label>
              <Select
                isMulti
                options={options}
                onChange={handleSelect}
                placeholder="Seleccione los accesorios que trae el aparato"
              />

              {/* <div class="mt-4">
                        <label className="block text-gray-700">Presupuesto</label>
                        <input 
                            type="text" 
                            name="presupuesto"
                            value={ presupuesto } 
                            onChange={  handleNewAparatoInput }
                            placeholder="ingrese el presupuesto" 
                            minlength="6" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"  />
                    </div> */}

              <div class="mt-4">
                <label className="block text-gray-700">Observaciones</label>
                <textarea
                  type="text"
                  name="observaciones"
                  value={observaciones}
                  onChange={handleNewAparatoInput}
                  placeholder="ingrese estado en el que llego el aparato, si tiene remoto, cable 220v, etc"
                  minlength="6"
                  class="w-full h-24 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"
                />
              </div>

              {/* <div class="mt-4">
                        <label className="block text-gray-700">Precio</label>
                        <input 
                            type="text" 
                            name="precio"
                            value={ precio } 
                            onChange={  handleNewAparatoInput }
                            placeholder="ingrese el precio del presupuesto" 
                            minlength="6" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"  />
                    </div> */}

              {/* <div class="mt-4">
                        <label className="block text-gray-700">Garantia</label>
                        <input 
                            type="text" 
                            name="garantia"
                            value={ garantia } 
                            onChange={  handleNewAparatoInput }
                            placeholder="ingrese la garantia" 
                            minlength="6" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"  />
                    </div>                                      */}

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6"
              >
                Registrar Nuevo Aparato
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
