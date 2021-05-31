import React from 'react'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { connect } from 'react-redux'
import { setData } from 'src/actions'
import { MdChevronLeft } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSingleCharacter } from '../../hooks/useDetailCharacter'
import {
  Figure,
  Img,
  TitleContent,
  DetailCard,
  ButtonContent,
  Button,
  LoaderContent
} from './styles'
import Loader from '../Loader'
function ContentDetail(props) {
  const history = useHistory()
  const { parseParams } = props
  const handleClickReturn = () => {
    history.replace('/')
  }

  const { singleCharacter, loading } = useSingleCharacter(parseParams)

  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'
  const { url = '', name = '' } = singleCharacter
  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }

  return (
    <>
      <ButtonContent>
        <Button onClick={handleClickReturn}>
          <MdChevronLeft size={32} />
          Return
        </Button>
      </ButtonContent>
      {singleCharacter && (
        <DetailCard>
          <TitleContent>
            <h1>{name}</h1>
          </TitleContent>
          <Figure>
            <Img alt={name} src={`${imgURL + getId(url)}.jpg`} />
          </Figure>
        </DetailCard>
      )}
      {loading && (
        <LoaderContent>
          <Loader />
        </LoaderContent>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetail)
