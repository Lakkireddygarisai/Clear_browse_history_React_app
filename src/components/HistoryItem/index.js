import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>

      <img src={logoUrl} className="logo-url" alt="domain logo" />
      <p className="heading">{title}</p>
      <p className="domain-url">{domainUrl}</p>

      <div className="button-container">
        <button
          type="button"
          className="button"
          testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-button"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
