import React, { useState } from 'react';
import '../css/Formulario.css';
import DataTable1 from '../Componentes/Desarrollo';

const Formulario = () => {
  
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        cedula: '',
        fechaNacimiento: '',
        sexo: '',
        puebloNacionalidad: '',
        estadoCivil: '',
        etnia: '',
        canton: '',
        barrioRecinto: '',
        parroquia: '',
        provincia: '',
        lugartrabajo:'Loja',
        ocupacion:'Electricista',
        telefonotrabajo:'0988898898',
        origenrecursos:'Comer y Dormir',
        enfermedad:'Virula del Mono',
        tipodesangre:'-H',
        tipocolegio: 'Fiscal',
        nombrecolegio: 'Napo',
        nombretitulo: 'Sistemas',
        ciudad:'Lago Agrio',
        canton:'Loja10',
        provincia: 'Sucumbios',
        ludoteca:'Poco',
        villas: 'Mas Poco',
        hospedaje: 'Mucho',
        alquiler: 'Mucho',
        autobus: 'Siempre',
        empleo: '2000$',
        mensual: '1200$',
        bono: '1$',
        estudiosp: 'Basico',
        estudiosm: 'Superior',
        hijos:'6',
        miembros:'19',
        bonofamilia:'200$',
        pocentaje:'20%',
        tipodediscapacidad:'Enfermo',
        numerodecarnet:'444444',
        nombredecontacto: 'Gabriel',
        numerodecontacto:'9784676846736'
        




    });

    const [isEditingDatosIdentificacion, setIsEditingDatosIdentificacion] = useState(false);
    const [isEditingDatosPersonales, setIsEditingDatosPersonales] = useState(false);
    const [isEditingResidencia, setIsEditingResidencia] = useState(false);
    const [isEditingInfo, setIsEditingInfo] = useState(false);
    const [isEditingInfosalud, setIsEditingInfosalud] = useState(false);
    const [isEditingEstudios, setIsEditingEstudios] = useState(false);
    const [isEditingSevicios, setIsEditingServicios] = useState(false);
    const [isEditingIngresos, setIsEditingIngresos] = useState(false);
    const [isEditingFamilia, setIsEditingFamilia] = useState(false);
    const [isEditingDiscapacidad, setIsEditingDiscapacidad] = useState(false);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEdit = (section) => {
        if (section === 'datosIdentificacion') {
            setIsEditingDatosIdentificacion(true);
        } else if (section === 'datosPersonales') {
            setIsEditingDatosPersonales(true);
        } else if (section === 'residencia') {
            setIsEditingResidencia(true);
        }else if (section === 'informacion') {
            setIsEditingInfo(true);
        }else if (section === 'informacionsalud') {
            setIsEditingInfosalud(true);
        }else if (section === 'estudios') {
            setIsEditingEstudios(true);
        }else if (section === 'servicios') {
            setIsEditingServicios(true);
        }
        else if (section === 'ingresos') {
            setIsEditingIngresos(true);
        } else if (section === 'familia') {
            setIsEditingFamilia(true);
        } else if (section === 'discapacidad') {
            setIsEditingDiscapacidad(true);
        }
    };

    const handleSave = (section) => {
        console.log(`Datos de ${section} guardados:`, formData);
        if (section === 'datosIdentificacion') {
            setIsEditingDatosIdentificacion(false);
        } else if (section === 'datosPersonales') {
            setIsEditingDatosPersonales(false);
        } else if (section === 'residencia') {
            setIsEditingResidencia(false);
        }else if (section === 'informacion') {
            setIsEditingInfo(false);
        }else if (section === 'informacionsalud') {
            setIsEditingInfosalud(false);
        }else if (section === 'estudios') {
            setIsEditingEstudios(false);
        }else if (section === 'servicios') {
            setIsEditingServicios(false);
        }
        else if (section === 'ingresos') {
            setIsEditingIngresos(false);
        }else if (section === 'familia') {
            setIsEditingFamilia(false);
        }else if (section === 'discapacidad') {
            setIsEditingDiscapacidad(false);
        }
    };

    const handleCancel = (section) => {
        if (section === 'datosIdentificacion') {
            setIsEditingDatosIdentificacion(false);
        } else if (section === 'datosPersonales') {
            setIsEditingDatosPersonales(false);
        } else if (section === 'residencia') {
            setIsEditingResidencia(false);
        }else if (section === 'informacion') {
            setIsEditingInfo(false);
        }else if (section === 'informacionsalud') {
            setIsEditingInfosalud(false);
        }else if (section === 'estudios') {
            setIsEditingEstudios(false);
        }else if (section === 'servicios') {
            setIsEditingServicios(false);
        }else if (section === 'ingresos') {
            setIsEditingIngresos(false);
        }else if (section === 'familia') {
            setIsEditingFamilia(false);
        }else if (section === 'discapacidad') {
            setIsEditingDiscapacidad(false);
        }
    };

    return (
      
        <>
            <DataTable1/>
            <div className="container-fluid">
                {/* Datos de Identificación */}
                <div className="section">
                    <h3>Datos de Identificación</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosIdentificacion}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Apellido</td>
                                <td>
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosIdentificacion}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Teléfono</td>
                                <td>
                                    <input
                                        type="text"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosIdentificacion}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Cédula</td>
                                <td>
                                    <input
                                        type="text"
                                        name="cedula"
                                        value={formData.cedula}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosIdentificacion}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Fecha de Nacimiento</td>
                                <td>
                                    <input
                                        type="date"
                                        name="fechaNacimiento"
                                        value={formData.fechaNacimiento}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosIdentificacion}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingDatosIdentificacion ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('datosIdentificacion')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('datosIdentificacion')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('datosIdentificacion')}>Editar</button>
                        )}
                    </div>
                </div>

                {/* Datos Personales */}
                <div className="section">
                    <h3>Datos Personales</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Sexo</td>
                                <td>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sexo"
                                            value="masculino"
                                            checked={formData.sexo === 'masculino'}
                                            onChange={handleChange}
                                            disabled={!isEditingDatosPersonales}
                                        />
                                        Masculino
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sexo"
                                            value="femenino"
                                            checked={formData.sexo === 'femenino'}
                                            onChange={handleChange}
                                            disabled={!isEditingDatosPersonales}
                                        />
                                        Femenino
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Pueblo Nacionalidad</td>
                                <td>
                                    <input
                                        type="text"
                                        name="puebloNacionalidad"
                                        value={formData.puebloNacionalidad}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosPersonales}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Estado Civil</td>
                                <td>
                                    <input
                                        type="text"
                                        name="estadoCivil"
                                        value={formData.estadoCivil}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosPersonales}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Etnia</td>
                                <td>
                                    <input
                                        type="text"
                                        name="etnia"
                                        value={formData.etnia}
                                        onChange={handleChange}
                                        disabled={!isEditingDatosPersonales}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingDatosPersonales ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('datosPersonales')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('datosPersonales')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('datosPersonales')}>Editar</button>
                        )}
                    </div>
                </div>

                {/* Residencia */}
                <div className="section">
                    <h3>Residencia</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Barrio Recinto</td>
                                <td>
                                    <input
                                        type="text"
                                        name="barrioRecinto"
                                        value={formData.barrioRecinto}
                                        onChange={handleChange}
                                        disabled={!isEditingResidencia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Cantón</td>
                                <td>
                                    <input
                                        type="text"
                                        name="canton"
                                        value={formData.canton}
                                        onChange={handleChange}
                                        disabled={!isEditingResidencia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Parroquia</td>
                                <td>
                                    <input
                                        type="text"
                                        name="parroquia"
                                        value={formData.parroquia}
                                        onChange={handleChange}
                                        disabled={!isEditingResidencia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Provincia</td>
                                <td>
                                    <input
                                        type="text"
                                        name="provincia"
                                        value={formData.provincia}
                                        onChange={handleChange}
                                        disabled={!isEditingResidencia}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingResidencia ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('residencia')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('residencia')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('residencia')}>Editar</button>
                        )}
                    </div>
                </div>

                {/* Informaciom */}
                <div className="section">
                    <h3>Informacion General</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Lugar de Trabajo</td>
                                <td>
                                    <input
                                        type="text"
                                        name="lugartrabajo"
                                        value={formData.lugartrabajo}
                                        onChange={handleChange}
                                        disabled={!isEditingInfo}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Ocupacion</td>
                                <td>
                                    <input
                                        type="text"
                                        name="ocupacion"
                                        value={formData.ocupacion}
                                        onChange={handleChange}
                                        disabled={!isEditingInfo}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Telefono de trabajo</td>
                                <td>
                                    <input
                                        type="text"
                                        name="telefonotrabajo"
                                        value={formData.telefonotrabajo}
                                        onChange={handleChange}
                                        disabled={!isEditingInfo}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Origen de recursos:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="origenrecursos:"
                                        value={formData.origenrecursos}
                                        onChange={handleChange}
                                        disabled={!isEditingInfo}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingInfo ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('informacion')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('informacion')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('informacion')}>Editar</button>
                        )}
                    </div>
                </div>



                {/* Informaciom */}
                <div className="section">
                    <h3>Informacion de la Salud</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Enfermedad</td>
                                <td>
                                    <input
                                        type="text"
                                        name="enfermedad"
                                        value={formData.enfermedad}
                                        onChange={handleChange}
                                        disabled={!isEditingInfosalud}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Tipo de Sangre</td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipodesangre"
                                        value={formData.tipodesangre}
                                        onChange={handleChange}
                                        disabled={!isEditingInfosalud}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingInfosalud ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('informacionsalud')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('informacionsalud')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('informacionsalud')}>Editar</button>
                        )}
                    </div>
                </div>


                {/* Estudios */}
                <div className="section">
                    <h3> Estudios</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Tipo de Colegio</td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipocolegio"
                                        value={formData.tipocolegio}
                                        onChange={handleChange}
                                        disabled={!isEditingEstudios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre del Colegio</td>
                                <td>
                                    <input
                                        type="text"
                                        name="nombrecolegio"
                                        value={formData.nombrecolegio}
                                        onChange={handleChange}
                                        disabled={!isEditingEstudios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre del Titulo</td>
                                <td>
                                    <input
                                        type="text"
                                        name="nombretitulo"
                                        value={formData.nombretitulo}
                                        onChange={handleChange}
                                        disabled={!isEditingEstudios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Ciudad</td>
                                <td>
                                    <input
                                        type="text"
                                        name="ciudad"
                                        value={formData.ciudad}
                                        onChange={handleChange}
                                        disabled={!isEditingEstudios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Canton</td>
                                <td>
                                    <input
                                        type="text"
                                        name="canton"
                                        value={formData.canton}
                                        onChange={handleChange}
                                        disabled={!isEditingEstudios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Provincia</td>
                                <td>
                                    <input
                                        type="text"
                                        name="provincia"
                                        value={formData.provincia}
                                        onChange={handleChange}
                                        disabled={!isEditingEstudios}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingEstudios ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('estudios')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('estudios')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('estudios')}>Editar</button>
                        )}
                    </div>
                </div>



                {/* Servicios */}
                <div className="section">
                    <h3> Servicios</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Ludoteca</td>
                                <td>
                                    <input
                                        type="text"
                                        name="ludoteca"
                                        value={formData.ludoteca}
                                        onChange={handleChange}
                                        disabled={!isEditingSevicios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Villas</td>
                                <td>
                                    <input
                                        type="text"
                                        name="villas"
                                        value={formData.villas}
                                        onChange={handleChange}
                                        disabled={!isEditingSevicios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Hospedaje</td>
                                <td>
                                    <input
                                        type="text"
                                        name="hospedaje"
                                        value={formData.hospedaje}
                                        onChange={handleChange}
                                        disabled={!isEditingSevicios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Alquiler</td>
                                <td>
                                    <input
                                        type="text"
                                        name="ciudad"
                                        value={formData.alquiler}
                                        onChange={handleChange}
                                        disabled={!isEditingSevicios}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Autobous</td>
                                <td>
                                    <input
                                        type="text"
                                        name="autobus"
                                        value={formData.autobus}
                                        onChange={handleChange}
                                        disabled={!isEditingSevicios}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingSevicios ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('servicios')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('servicios')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('servicios')}>Editar</button>
                        )}
                    </div>
                </div>



                {/* Ingresos */}
                <div className="section">
                    <h3> Ingresos</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Empleo</td>
                                <td>
                                    <input
                                        type="text"
                                        name="empleo"
                                        value={formData.empleo}
                                        onChange={handleChange}
                                        disabled={!isEditingIngresos}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mensual</td>
                                <td>
                                    <input
                                        type="text"
                                        name="mensual"
                                        value={formData.mensual}
                                        onChange={handleChange}
                                        disabled={!isEditingIngresos}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Bono</td>
                                <td>
                                    <input
                                        type="text"
                                        name="bono"
                                        value={formData.bono}
                                        onChange={handleChange}
                                        disabled={!isEditingIngresos}
                                    />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingIngresos ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('ingresos')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('ingresos')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('ingresos')}>Editar</button>
                        )}
                    </div>
                </div>



                {/* Familia */}
                <div className="section">
                    <h3> Familia</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>Estudios del Padre</td>
                                <td>
                                    <input
                                        type="text"
                                        name="estudiosop"
                                        value={formData.estudiosp}
                                        onChange={handleChange}
                                        disabled={!isEditingFamilia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Estudios del Madre</td>
                                <td>
                                    <input
                                        type="text"
                                        name="estudiosom"
                                        value={formData.estudiosm}
                                        onChange={handleChange}
                                        disabled={!isEditingFamilia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Hijos</td>
                                <td>
                                    <input
                                        type="text"
                                        name="hijos"
                                        value={formData.hijos}
                                        onChange={handleChange}
                                        disabled={!isEditingFamilia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Miembros</td>
                                <td>
                                    <input
                                        type="text"
                                        name="miembros"
                                        value={formData.miembros}
                                        onChange={handleChange}
                                        disabled={!isEditingFamilia}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Bono Familiar</td>
                                <td>
                                    <input
                                        type="text"
                                        name="bonofamilia"
                                        value={formData.bonofamilia}
                                        onChange={handleChange}
                                        disabled={!isEditingFamilia}
                                    />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingFamilia ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('familia')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('familia')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('familia')}>Editar</button>
                        )}
                    </div>
                </div>



                {/* Discapacidad */}
                <div className="section">
                    <h3> Familia</h3>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td>%Discapacidad</td>
                                <td>
                                    <input
                                        type="text"
                                        name="pocentaje"
                                        value={formData.pocentaje}
                                        onChange={handleChange}
                                        disabled={!isEditingDiscapacidad}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipodediscapacidad"
                                        value={formData.tipodediscapacidad}
                                        onChange={handleChange}
                                        disabled={!isEditingDiscapacidad}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> Numero de carnet:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="numerodecarnet"
                                        value={formData.numerodecarnet}
                                        onChange={handleChange}
                                        disabled={!isEditingDiscapacidad}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre de contacto</td>
                                <td>
                                    <input
                                        type="text"
                                        name="nombredecontacto"
                                        value={formData.nombredecontacto}
                                        onChange={handleChange}
                                        disabled={!isEditingDiscapacidad}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> NUmero de contacto</td>
                                <td>
                                    <input
                                        type="text"
                                        name="numerodecontacto"
                                        value={formData.numerodecontacto}
                                        onChange={handleChange}
                                        disabled={!isEditingDiscapacidad}
                                    />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        {isEditingDiscapacidad ? (
                            <>
                                <button className="save-button" onClick={() => handleSave('discapacidad')}>Guardar</button>
                                <button className="cancel-button" onClick={() => handleCancel('discapacidad')}>Cancelar</button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => handleEdit('discapacidad')}>Editar</button>
                        )}
                    </div>
                </div>





                

                
            </div>
        </>
    
    );
};

export default Formulario;
