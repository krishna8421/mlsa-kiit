import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/mlsa-logo.png"
      width={50}
      height={50}
      alt="MLSA Logo"
      quality={100}
    />
  )
}

export default Logo