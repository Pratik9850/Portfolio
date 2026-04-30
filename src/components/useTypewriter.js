import { useState, useEffect } from 'react'

export function useTypewriter(words, speed = 60) {
  const [index,   setIndex]   = useState(0)
  const [text,    setText]    = useState('')
  const [deleting, setDelete] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const delay = deleting ? speed * 0.45 : speed

    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) {
          setTimeout(() => setDelete(true), 1600)
        }
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length === 0) {
          setDelete(false)
          setIndex(i => i + 1)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, index, words, speed])

  return text
}
