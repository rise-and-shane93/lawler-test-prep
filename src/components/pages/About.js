import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TipsContact from "../layout/TipsContact";

const About = ({match}) => {
    
    let lang = match.params.lang;
    let aboutEnglish = "About us";
    let aboutSpanish = "¿Quienes somos?"
    let englishText = "<p>Every year, literally millions of students from countries around the world apply to US colleges and universities, vying to get a spot at their school of choice. While some may be lucky enough to have studied at an international school in their home country or been at the top of their class when it comes to grades, there is one area where most international applicants fall short, the SAT.</p><p>The Scholastic Aptitude Test is the US national standardized test that is used by higher education institutes as part of their admissions process to determine which candidates deserve a place at their school. While the test is challenging enough for native US residents, for international students it’s that much more difficult, as most of them take the test without having any sort of familiarity or training beforehand. Ironically, something that may seem secondary actually holds even more importance for global applicants given that individual universities may not be able to gauge whether or not a student’s transcript and cultural education system has truly prepared them for US university. Because of this, universities use the SAT in order to clarify where students stand in terms of the problem solving and analysis skills necessary to succeed with higher education. With so much riding on this exam, how can one increase the odds of showing their true potential and getting into the school where they want to study? At Lawler Test Prep we’re here to show you.</p><p>Lawler Test Prep is a specialized exam preparation company that makes sure that every student that takes our course has a competitive advantage not only with other university applicants from their native country but with students from around the globe, including in the USA.</p><p>With Lawler Test Prep, the SAT is broken down into specific skills that give students the tools necessary to deconstruct every question into its most basic components and find the best answer. Students have the chance to drill and practice these skills with real world questions and practice exams that familiarize them with every aspect of the test so that by the time they sit down for the real thing, not only do they feel comfortable, they feel confident.</p><p>Founded by two US natives with a long history in Colombia, Lawler Test Prep offers a unique SAT preparation experience that has been tailor-made for Spanish speakers, targeting the most common errors that even the most advanced students make when English is not their native language</p><p>Each class of Lawler Test Prep’s program is delivered by experienced teachers that are able to respond to the individual needs of every student in order to maximize their knowledge and understanding of the test. Students and parents alike are able to track progress with LTP’s unique algorithm that employs diagnostic tests, exercises and formative assessments to show advancement in a clear and tangible way via the website dashboard</p><p>When it comes to the SAT, you need the same standard of quality that the university you’re applying to is going to measure you by, at Lawler Test Prep we are laser focused on quality in order for students to achieve great results.</p>";
    let spanishText = "<p>Cada año, millones de estudiantes de países de todo el mundo se postulan para estudiar en las universidades de los Estados Unidos. Compiten por conseguir un lugar en la universidad de su elección. Algunos tienen la suerte de haber estudiado en un colegio internacional en su país de origen o sobresalir en resultados académicos por encima de sus compañeros de clase; sin embargo, hay un área donde la mayoría de los solicitantes internacionales se quedan cortos, el SAT.</p><p>El “Scholastic Aptitude Test” (prueba de aptitud escolar) es el examen nacional estandarizado de los Estados Unidos, parte fundamental de los procesos de admisión de los institutos de educación superior. Este examen desafiante para los residentes nativos de los EE.UU, para los estudiantes internacionales les resulta ser mucho más difícil, ya que la mayoría de ellos toman el examen sin tener ningún tipo de familiaridad o capacitación previa.</p><p>Irónicamente, algo que puede parecer secundario, en realidad es lo más importante para los aplicantes globales. Las universidades no pueden evaluar con las calificaciones de un estudiante si su sistema de educación local lo preparó para el sistema educativo de las universidades de los EE.UU. Por esto, los resultados en el SAT buscan identificar las habilidades para la resolución de problemas y pensamiento crítico necesarios para tener éxito en la educación superior. Con laimportancia que tiene este examen, ¿cómo puedes aumentar la probabilidad de mostrar tu verdadero potencial y entrar a la universidad donde quieres estudiar? Lawler Test Prep está aquí para mostrarte.</p><p>Lawler Test Prep - LTP es una compañía especializada en la preparación de exámenes que asegura que cada estudiante que tome nuestro curso tenga la ventaja competitiva no solo en comparación con otros aplicantes universitarios de su país natal, sino también con estudiantes de todo el mundo, incluso en los EE.UU.</p><p>Con Lawler Test Prep, el SAT se divide en habilidades específicas que brindan a los estudiantes las herramientas necesarias para decodificar cada pregunta en sus componentes más básicos y encontrar la mejor respuesta. Los estudiantes de LTP tienen la oportunidad de ensayar estas habilidades con preguntas y exámenes de práctica reales que los familiarizan con todos los aspectos del examen para que cuando lo presenten se sientan cómodos y seguros.</p><p>Fundada por dos nativos de los EE.UU. con una larga historia de trabajo pedagógico en Colombia, ofrece una experiencia única de preparación para el SAT diseñada a la medida de los hispanohablantes, enfocada en superar los errores más comunes que incluso los estudiantes avanzados cometen cuando el inglés no es su primera lengua.</p><p>Cada clase del programa de Lawler Test Prep es dirigida por maestros experimentados que pueden responder a las necesidades individuales de cada estudiante para maximizar su conocimiento y comprensión del examen. Tanto estudiantes como padres pueden seguir el progreso de los estudiantes con el algoritmo único de LTP que emplea evaluaciones diagnósticas, ejercicios y evaluaciones formativas para mostrar el avance de una manera clara y tangible a través del tablero de control del sitio web.</p><p>Cuando se trata del SAT, necesitas el mismo estándar de calidad con el que la universidad a la que te postulas te va a medir, en Lawler Test Prep estamos enfocados en dar la mejor calidad para que sus estudiantes logren excelentes resultados.</p>";
    let renderedText = lang === 'en' ? englishText : spanishText;
    let renderedAbout = lang === 'en' ? aboutEnglish : aboutSpanish;

    return (
        <>
            <section id="about-info">
                <div id="return-to-home">
                    <Link to="/" title="Return to home page"><i class="fa fa-caret-left"></i>&nbsp;</Link>
                    <h1>{renderedAbout}</h1>
                </div>
                <div id="about-text">
                    <div dangerouslySetInnerHTML={{__html: renderedText}} />
                </div>
            </section>
            <TipsContact/>
        </>
    );
}

// class About extends Component {
//     render() {
//         return(

//         );
//     }
// }

export default About;