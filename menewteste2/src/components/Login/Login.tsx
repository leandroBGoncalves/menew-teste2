import { Buttons, Cancel, ChecBox, LogBox, Overlay, SemCadastro } from "./styleLog";
import LogoImg from '../../assets/menew-bymv.png';
import { Link } from "react-router-dom";


export const TelaLog = ({ onClose = () => {}}) => {
       return (
        <Overlay>
            <LogBox>
                <img src={LogoImg} alt=""/>
                <h1>Faça seu login</h1>
                <input type="e-mail" name="e-mail" id="email" placeholder="seuemail@voce.com" required/>
               <input type="password" name="Senha" id="Senha" placeholder="senha" required/>
               <ChecBox>
               <input type="checkbox" name="Manter Conectado" id="Manter Conectado"/>
               <label htmlFor="Manter Conectado">Manter Conectado</label>
               </ChecBox>
               <Buttons>
                   <Cancel>
                       <span onMouseUp={onClose}>Cancelar</span>
                    </Cancel>
                   <button type="submit" name="SubmitLogin">Entrar</button>
               </Buttons>
               <SemCadastro>
                   <Link to="/Cadastro">
                        Não tenho Cadastro
                   </Link>
               </SemCadastro>
            </LogBox>
        </Overlay>
    )
}