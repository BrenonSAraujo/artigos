import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Brenon!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Brenon sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu um aluno da Alura!.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou com os cursos online e gratuitos na fundação Bradesco. Após este primeiro contato com o mundo da tecnologia, decidi me aprofundar ainda mais nesta área .
            </p>
            <p className={styles.paragrafo}>
                Foi então que escolhi ser aluno da Alura e aprender, por meio da criação de projetos, as principais abordagens do mercado de desenvolvimento.
            </p>
            <p className={styles.paragrafo}>
                Concomitantemente a isso, consegui ingressar no curso superior de Ciência da Computação na Universidade São Judas Tadeu (USJT). Com isso, terei uma visão ampla sobre esta área de extrema relevância nos dias atuais.
            </p>
        </PostModelo>
    )
}