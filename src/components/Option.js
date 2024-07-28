import React from 'react'

let styleObj = {};
export default function Option({ option, selected, setSelected, submitted, correct, response }) {

  if (!response) {
    if (submitted) {
      if (option === correct) {
        styleObj = { backgroundColor: 'var(--color-correct)' }
      }
      else if (option === selected && option !== correct) {
        styleObj = { backgroundColor: 'var(--color-error)' }
      }
      else {
        styleObj = {}
      }
    }
    else if (!submitted && option === selected) {
      styleObj = { backgroundColor: 'var(--color-accent)' }
    }
    else {
      styleObj = {}
    }
  }
  else {
    if (option === correct) {
      styleObj = { backgroundColor: 'var(--color-correct)' };
    }
    else if (option === response && response !== correct) {
      styleObj = { backgroundColor: 'var(--color-error)' };
    }
    else {
      styleObj = {};
    }
  }

  return (
    <button className='btn btn-option' onClick={() => setSelected(option)} style={styleObj} disabled={response || submitted}>{option}</button>
  )
}
