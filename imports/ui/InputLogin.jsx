import React from 'react';


export const LoginInput = (type) =>{

return (
  <>
    <label>{type.text}</label><p>
    <input
            type={type.type}
            placeholder={type.placeholder}
            name={type.name}
            required
            onChange={e => type.set(e.target.value)}
          />
    </p>
  </>
)
}
