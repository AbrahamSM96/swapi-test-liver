import React from 'react'
import Card from '../Card'
import useFetchApi from '../../hooks/useFetchApi'
import { setData } from '../../actions'
import { connect } from 'react-redux'
import { ContainerCard, WrapperCard, LoaderContent } from './styles'
import Loader from '../Loader'
function ContentCard(props) {
  const fetchApi = useFetchApi()
  const { data, load, error } = fetchApi
  const { results = [] } = data
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }

  return (
    <>
      <ContainerCard>
        <WrapperCard>
          {results &&
            results.map(({ name, films, url }, index) => (
              <Card
                key={index}
                name={name}
                films={films}
                urlImg={`${imgURL + getId(url)}.jpg`}
                index={index}
                id={getId(url)}
              />
            ))}
          {load && (
            <LoaderContent>
              <Loader />
            </LoaderContent>
          )}
        </WrapperCard>
      </ContainerCard>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = {
  setData
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentCard)
