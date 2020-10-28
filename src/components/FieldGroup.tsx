import React from 'react'

type FieldGroupType = {
  isColumn?: boolean,
  children: React.ReactNode
}

const styles = (isColumn = false) => ({
  'display': 'flex',
  'flex-direction': isColumn ? 'column' : 'raw'
})

const FieldGroup = ({ isColumn, children }: FieldGroupType) =>
  <div style={styles(isColumn)}>
    {children}
  </div>

export default FieldGroup