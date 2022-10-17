import {SiGmail, SiGithub, SiDiscord} from 'react-icons/si';
export default function Contact() {
  return (
    <div>
      <div className='contact'>
        <div className='contact-heading'>
          <h2>CONTACT WITH ME</h2>
          <div className='bottom-line'></div>
        </div>

        <div className='contact-grid'>
          <div>
            <SiGmail size={40}/>
            <h3>Gmail</h3>
            <p>nhandinhdo291@gmail.com</p>
          </div>

          <div>
            <SiGithub size={40}/>
            <h3>Github</h3>
            <a href='https://github.com/ZennyFZ' target="_blank">ZennyFZ</a>
          </div>

          <div>
            <SiDiscord size={40}/>
            <h3>Discord</h3>
            <a href="https://discordapp.com/users/337217983279661056" target="_blank">Duckzuki#1972</a>
          </div>
        </div>
      </div>
    </div>
  );
}