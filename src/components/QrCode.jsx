import { ReactQRCode } from '@lglab/react-qr-code'

const QR = ({url}) => {
  return (
    <ReactQRCode value={url} />
  );
}
export default QR
