import React from 'react';
import { profile, projects } from './data.js';

export default function App() {
  return (
    <main className="resume">
      <header>
        <img src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Токтоев Эльгиз" width="150" height="200" />
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </header>

      <section>
        <h2>Обо мне</h2>
        <p>{profile.about}</p>
      </section>

      <section>
        <h2>Навыки</h2>
        <p>{profile.skills.join(', ')}</p>
      </section>

      <section>
        <h2>Образование</h2>
        <p>{profile.education}</p>
      </section>

      <section>
        <h2>Проекты</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.repository}>
              <a href={`${profile.github}/${project.repository}`} target="_blank" rel="noreferrer">{project.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Контакты</h2>
        <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p>GitHub: <a href={profile.github} target="_blank" rel="noreferrer">{profile.githubUsername}</a></p>
      </section>

      <button onClick={() => window.print()}>Печать / PDF</button>
    </main>
  );
}
