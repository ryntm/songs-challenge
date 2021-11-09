import { useEffect } from 'react';
import styles from '../styles/nav.module.css';


export default function Nav() {

    useEffect(() => {

        // changing the btn primary when the nav buttons are clicked
        let highlight = 'rap-button';
        let clickButtons = document.getElementsByClassName('btn');

        for (let i = 0; i < clickButtons.length; i++) {

            clickButtons[i].addEventListener('click', () => {

                let highlightEl = document.getElementById(highlight)
                highlightEl.classList.remove('btn-primary')
                highlightEl.classList.add('btn-light')
                
                highlight = clickButtons[i].getAttribute('id')

                highlightEl = document.getElementById(highlight)
                highlightEl.classList.remove('btn-light')
                highlightEl.classList.add('btn-primary')
            })
        }

        // changing primary button based on page height position.
        let containers = document.querySelectorAll('.container');
        let containerHeights = []

        for (let i = 0; i < containers.length; i++) {
            containerHeights.push(containers[i].offsetTop+10)
        }

        window.addEventListener('scroll', () => {
            let yLocation = window.pageYOffset
            console.log(yLocation)
            
            let containerReached = []
            containerHeights.forEach(containerHeight => {
                if (yLocation >= containerHeight) {
                    containerReached.push(containerHeight)
                }
            })
 
            console.log(containerReached)
 
            let getMain = document.getElementById('genre-buttons')

            let childrenArray = getMain.children

            for (let i = 0; i < childrenArray.length; i++) {
                if (i === containerReached.length-1) {
                    childrenArray[i].children[0].classList.add('btn-primary') 
                    childrenArray[i].children[0].classList.remove('btn-light')
                    console.log('yes')
                } else {
                    childrenArray[i].children[0].classList.add('btn-light')
                    childrenArray[i].children[0].classList.remove('btn-primary') 
                    console.log('no')
                }
            }
        })
 

    }, [])

    return (
        <div className={styles.sticky} id={styles.nav}>

            <nav className={`${styles.sticky} mw-100 d-flex bd-highlight`} id='genre-buttons'>

                {/* add buttons here, hard code for now.  maybe map through genres later with nav-btns*/}
                
                <a className={styles.links} href="#rap">
                    <button className={`${styles.navbutton} btn btn-primary flex-fill`} id="rap-button">
                        Rap
                    </button>
                </a>
                <a className={styles.links} href="#pop">
                    <button className={`${styles.navbutton} btn btn-light flex-fill`} id="pop-button">
                        Pop
                    </button>
                </a>
                <a className={styles.links} href="#edm">
                    <button className={`${styles.navbutton} btn btn-light flex-fill`} id="edm-button">
                        EDM
                    </button>
                </a>
                <a className={styles.links} href="#r&b">
                    <button className={`${styles.navbutton} btn btn-light flex-fill`} id="r&b-button">
                        R&B
                    </button>
                </a>
                <a className={styles.links} href="#rock">
                    <button className={`${styles.navbutton} btn btn-light flex-fill`} id="rock-button">
                        Rock    
                    </button>
                </a>
                <a className={styles.links} href="#latin">
                    <button className={`${styles.navbutton} btn btn-light flex-fill`} id="latin-button">
                        Latin
                    </button>
                </a>

            </nav>
        </div>
    )
}