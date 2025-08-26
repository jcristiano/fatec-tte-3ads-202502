import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

import FatecLogo from '@site/static/img/fatec-taubate-logo.png';

export default function Home() {
  return (
    <Layout
      title="Fatec Taubaté - ADS"
      description="Portal do curso de Análise e Desenvolvimento de Sistemas da Fatec Taubaté"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <img src={FatecLogo} alt="Fatec Taubaté" className={styles.logo} />
          <h1 className="hero__title">Análise e Desenvolvimento de Sistemas</h1>
          <p className="hero__subtitle">Fatec Taubaté</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Acessar Materiais
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Sobre o Curso</h3>
                <p>Formação tecnológica em desenvolvimento de software, engenharia de sistemas e inovação digital.</p>
              </div>
              <div className="col col--4">
                <h3>Disciplinas</h3>
                <p>Veja os conteúdos organizados por semestre e matéria.</p>
              </div>
              <div className="col col--4">
                <h3>Projetos</h3>
                <p>Conheça os trabalhos e projetos desenvolvidos pelos alunos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
