import React, { useState } from "react";
import "../css/curso.css";

const CourseSystem = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseName: "",
    universityName: "",
    image: null,
  });

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el cambio en el campo de la imagen
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Función para agregar un nuevo curso
  const addCourse = (e) => {
    e.preventDefault();

    if (!formData.courseName && !formData.universityName && !formData.image) {
      return; // No agrega curso si todos los campos están vacíos
    }

    const newCourse = {
      id: Date.now(),
      ...formData,
    };
    setCourses([...courses, newCourse]);
    setFormData({
      courseName: "",
      universityName: "",
      image: null,
    });
  };

  // Función para eliminar un curso
  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id)); // Filtra los cursos para eliminar el que coincide con el ID
  };

  return (
    <div className="CourseContainer">
      <h2 className="CourseContainer__title">Sistema de Cursos</h2>

      <form onSubmit={addCourse} className="course-form">
        <div className="course-form__box">
          <label className="course-form__box__label" htmlFor="courseName">
            Nombre de la Carrera (Opcional)
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Nombre de la carrera"
            className="course-form__box__input"
          />
        </div>

        <div className="course-form__box">
          <label htmlFor="universityName" className="course-form__box__label">
            Nombre de la Universidad (Opcional)
          </label>
          <input
            type="text"
            id="universityName"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            placeholder="Nombre de la universidad"
            className="course-form__box__input"
          />
        </div>

        <div className="course-form__box">
          <label className="course-form__box__label" htmlFor="image">
            Imagen del Curso (Opcional)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="course-form__box__input"
          />
        </div>

        <button className="btn-course" type="submit">
          Crear Curso
        </button>
      </form>

      <div className="">
        {courses.map((course) => (
          <div key={course.id}>
            <h3>
              {course.courseName || "Nombre de la Carrera No Especificado"}
            </h3>
            <p>
              <strong>Universidad:</strong>{" "}
              {course.universityName || "Universidad No Especificada"}
            </p>
            {course.image && (
              <img
                src={URL.createObjectURL(course.image)}
                alt={course.courseName || "Imagen del Curso"}
              />
            )}
            <button onClick={() => removeCourse(course.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSystem;
