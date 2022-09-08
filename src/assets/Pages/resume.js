import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../Resume/resume.pdf'

const Resume = () => {
  return (
    <div className='main-container'>
      <Document file={resume} >
        <Page pageNumber={1} />
      </Document> 
    </div>
  )
}

export default Resume;