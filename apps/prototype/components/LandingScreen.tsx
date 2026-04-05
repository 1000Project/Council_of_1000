type LandingProps = {

  onEnter: () => void

}

export default function LandingScreen({ onEnter }: LandingProps) {

  return (

    <div>

      <h1>Council of 1000</h1>

      <p>
        From a thousand champions, only the worthy ascend.
      </p>

      <button onClick={onEnter}>
        Enter the Realm
      </button>

    </div>

  )

}
