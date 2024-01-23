export function WinnerModal({winner, reloadButton}) {
  if (winner == null) return null

  const winnerText = winner == false ? 'Empate' : `El ganador es ${winner}`

  return (
    <section className="boardInfo">
      <div>
        <h3>{winnerText}</h3>
      </div>
    </section>
  )
}