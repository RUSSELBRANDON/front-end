import React from 'react'

export const CourseItem = (props) => {
    const {course}=props
    const { cycle, classe, matiere } = course;
  return (
    <div className='flex border mt-5'>
            <div>
                <h6>Cycle: {cycle}</h6><button className='btn-small btn-success'>ajouter</button><button className='btn-small btn-primary'>modifier</button><button className='btn-small btn-danger'>supprimer</button>
                <h6>Classe: {classe}</h6><button className='btn-small btn-success'>ajouter</button><button className='btn-small btn-primary'>modifier</button><button className='btn-small btn-danger'>supprimer</button>
                <h6>Matiere: {matiere}</h6><button className='btn-small btn-success'>ajouter</button><button className='btn-small btn-primary'>modifier</button><button className='btn-small btn-danger'>supprimer</button>
                
            </div>
           
                
                
        </div>
  )
}
