import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMediumM, faVk, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  library.add(faMediumM)
  library.add(faVk)
  library.add(faGithub)
  library.add(faInstagram)
  library.add(faChevronDown)
  library.add(faCaretLeft)
  library.add(faCaretRight)

  app.component('FontAwesomeIcon', FontAwesomeIcon)
}
