import { onMounted, onBeforeUnmount, ref } from 'vue'
import { NAVBAR_MIN_SCROLL_PATH_TO_HIDE_PX } from '~/config/general'

enum ScrollDirection {
  Initial,
  Up,
  Down,
}

export function useVisibilityTrackingOnScroll({
  minScrollPathToHidePx = NAVBAR_MIN_SCROLL_PATH_TO_HIDE_PX,
  navbarElementId = 'js-navbar',
  navbarHideClassName = 'hide',
  isDefaultVisible = true,
} = {}) {
  const isNavbarVisible = ref(isDefaultVisible)
  const currentScrollTopPx = ref(0)
  let prevScrollTopPx = 0
  let scrollDirection = ScrollDirection.Initial
  let prevScrollDirection = ScrollDirection.Initial

  onMounted(() => {
    window.addEventListener('scroll', trackNavbarVisibilityOnScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', trackNavbarVisibilityOnScroll)
  })

  function hideNavbar(): void {
    const navbarElement = document.getElementById(navbarElementId)!
    navbarElement.classList.add(navbarHideClassName)
    isNavbarVisible.value = false
  }

  function showNavbar(): void {
    const navbarElement = document.getElementById(navbarElementId)!
    navbarElement.classList.remove(navbarHideClassName)
    isNavbarVisible.value = true
  }

  function toggle(): void {
    if (scrollDirection === ScrollDirection.Down && currentScrollTopPx.value > minScrollPathToHidePx) {
      hideNavbar()
      prevScrollDirection = scrollDirection
    }
    else if (scrollDirection === ScrollDirection.Up) {
      showNavbar()
      prevScrollDirection = scrollDirection
    }
  }

  function trackNavbarVisibilityOnScroll(): void {
    currentScrollTopPx.value = window.scrollY || document.documentElement.scrollTop

    scrollDirection = (currentScrollTopPx.value > prevScrollTopPx) ? ScrollDirection.Down : ScrollDirection.Up

    if (scrollDirection !== prevScrollDirection) toggle()

    prevScrollTopPx = currentScrollTopPx.value
  }

  return {
    NAVBAR_ELEMENT_ID: navbarElementId,
    NAVBAR_HIDE_CLASS_NAME: navbarHideClassName,
    hideNavbar,
    showNavbar,
    isNavbarVisible,
    currentScrollTopPx,
  }
}
