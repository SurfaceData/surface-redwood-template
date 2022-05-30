import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'

const DOWNLOAD = gql`
  query DatasetUrl($input: DownloadCorpusInput!) {
    datasetUrl(input: $input) {
      url
    }
  }
`
const DatasetDownloadButton = () => {
  const [downloadLink, setDownloadLink] = useState(null)
  const [ datasetUrl ] = useLazyQuery(DOWNLOAD, {
    onCompleted: (result) => {
      setDownloadLink(result.datasetUrl.url)
    }
  })

  const onGetDownloadClick = () => {
    datasetUrl({
      variables: {
        input: {
          dataset: 'sentence-collector.txt',
        }
      }
    })
  }

  return (
    <div>
      <button onClick={onGetDownloadClick}>Get Download Link</button>
      {downloadLink && <a href={downloadLink}>Download</a>}
    </div>
  )
}

export default DatasetDownloadButton
