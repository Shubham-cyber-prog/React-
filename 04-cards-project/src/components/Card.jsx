import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://th.bing.com/th/id/OIP.3LnIV1MEYIIESkTBW3rCgAHaFU?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
          />

          <button>
            Save <Bookmark size={14} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Odisha, India</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card