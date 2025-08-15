import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import SplitType from 'split-type'

export const initGsap = () => {
  gsap.registerPlugin(ScrollTrigger, Observer)
}

export const initAnimation = () => {
  document.querySelectorAll('[animation-text]').forEach((element: any) => {
    element
      .querySelectorAll('[data-word]')
      .forEach((word: any, wordIndex: number) => {
        gsap.set(word, {
          opacity: 0,
          y: 200 + wordIndex * 20,
        })
      })

    element.querySelectorAll('[data-word]').forEach((word: any) => {
      gsap.to(word, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          toggleActions: 'play none none none',
        },
      })
    })
  })

  document
    .querySelectorAll('[animation-element]')
    .forEach((element: any, elementIndex: number) => {
      gsap.set(element, {
        opacity: 0,
        y: 200 + elementIndex * 20,
      })

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          toggleActions: 'play none none none',
        },
      })
    })

  document.querySelectorAll('[animation-button]').forEach((ele: any) => {
    gsap.set(ele, {
      opacity: 0,
      y: 100,
    })

    gsap.to(ele, {
      opacity: 1,
      y: 0,
      duration: 0.5,

      ease: 'power2.out',
      scrollTrigger: {
        trigger: ele,
        start: 'top 98%',
        toggleActions: 'play reverse restart reverse',
      },
    })
  })

  document
    .querySelectorAll('[banner-animation-line]')
    .forEach((ele: any, index: number) => {
      gsap.set(ele, {
        opacity: 0,
        y: 100,
      })

      gsap.to(ele, {
        opacity: 1,
        y: 0,
        duration: 3,
        delay: 0.2 * index,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ele,
          start: 'top 98%',
          toggleActions: 'play reverse restart reverse',
        },
      })
    })

  document.querySelectorAll('[anime-block-wrap]').forEach(wrapElement => {
    const headlineElementInWrap: any = wrapElement.querySelector(
      '[headline-anime-in-wrap]',
    )

    if (headlineElementInWrap) {
      const headlineCharsInWrap: any = new SplitType(headlineElementInWrap, {
        types: ['words', 'lines'],
      })

      headlineCharsInWrap.words.forEach((word: any, index: any) => {
        gsap.set(word, { opacity: 0, y: 200 + index * 20 })
      })

      headlineCharsInWrap.words.forEach((word: any) => {
        gsap.to(word, {
          scrollTrigger: {
            trigger: wrapElement,
            start: 'top 99%',
            end: 'bottom 20%',
            scrub: true,
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        })
      })
    }
  })

  document
    .querySelectorAll('[hero-headline]')
    .forEach((headlineElement: any) => {
      headlineElement
        .querySelectorAll('[data-word]')
        .forEach((word: any, wordIndex: any) => {
          gsap.set(word, {
            opacity: 0,
            y: 300 + wordIndex * 50,
          })
        })
      headlineElement.querySelectorAll('[data-word]').forEach((word: any) => {
        gsap.to(word, {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power1.out',
          stagger: 0.3,
        })
      })
    })
  document.querySelectorAll('.footer-anime').forEach((lineElement: any) => {
    const id = lineElement.getAttribute('id')

    gsap.set(lineElement, {
      opacity: 0,
      y: 100,
    })
    gsap.to(lineElement, {
      scrollTrigger: {
        trigger: id ? `#${id}` : lineElement,
        start: 'top bottom',
        end: '+=50',
        scrub: true,
        onEnter: () => {
          gsap.to(lineElement, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power2.out',
            // stagger: 0.5,
          })
        },
        onLeaveBack: () => {
          gsap.to(lineElement, {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: 'power2.out',
            // stagger: 0.3,
          })
        },
      },

      duration: 1,
      ease: 'power1.inOut',
    })

    lineElement
      .querySelectorAll('.line')
      .forEach((lineC: any, lineIndex: any) => {
        gsap.set(lineC, {
          opacity: 0,
          y: 100 + lineIndex * 50,
        })
        gsap.to(lineC, {
          opacity: 1,
          y: 0.1,
          scrollTrigger: {
            trigger: `#${id}`,
            start: 'top bottom',
            end: '+=50',
            scrub: true,
            onEnter: () => {
              gsap.to(lineC, {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: 'power2.out',
                // stagger: 0.3,
              })
            },
            onLeaveBack: () => {
              gsap.to(lineC, {
                opacity: 0,
                y: 300 + lineIndex * 50,
                duration: 2,
                ease: 'power2.out',
              })
            },
          },
          duration: 1,
          ease: 'power1.inOut',
          // stagger: 0.3,
        })
      })
  })
}
