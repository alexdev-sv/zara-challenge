/* eslint-disable @next/next/no-img-element */
import { PhoneImageDetailProps } from "./PhoneImageDetail.props"

export const PhoneImageDetail = ({deviceImageByColor} : PhoneImageDetailProps) => {
    return <>
        <div className='view-article-image-preview'>
          <img className="device-image" src={deviceImageByColor} alt="phone" />
        </div>
    </>
}

