import './style.css'

export default function Rodape() {
  return (
    <footer>
      <div className=' limitar-secao container-logo-informacoes'>
        <img src="assets/logo.png" alt="logomarca" />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Alameda Santos, 2313</p>
          <p>Cerqueira César - São Paulo/SP</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>contato@chupaaqui.com.br</p>
          <p>Tel: (11) 9-6429-0237 </p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className='limitar-secao direito-autoral'>
        <p>Gelateria Chupa Aqui. Orgulhosamente desenvolvido por "Nitchinho"</p>
      </div>
    </footer>
  )
}