import { type CSS, styled, type ComponentProps } from "~/stitches.config"

const SVGStyled = styled("svg")

type IconProps = {
  css?: CSS
} & ComponentProps<typeof SVGStyled>

export function Arrow2({ css, ...rest }: IconProps) {
  return (
    <SVGStyled width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" css={{ ...css }} {...rest}>
      <path
        d="M13.9584 36.2917L47.0675 36.2917L36.9338 48.4633C36.4599 49.0334 36.232 49.7684 36.3 50.5066C36.3681 51.2448 36.7266 51.9257 37.2967 52.3996C37.8668 52.8734 38.6018 53.1014 39.34 53.0334C40.0782 52.9653 40.7591 52.6068 41.233 52.0367L55.1913 35.2867C55.2852 35.1534 55.3692 35.0135 55.4425 34.8679C55.4425 34.7283 55.4425 34.6446 55.638 34.505C55.7645 34.1849 55.8307 33.8442 55.8334 33.5C55.8307 33.1558 55.7645 32.8151 55.638 32.495C55.638 32.3554 55.638 32.2717 55.4425 32.1321C55.3692 31.9865 55.2852 31.8466 55.1913 31.7133L41.233 14.9633C40.9705 14.6482 40.6418 14.3948 40.2703 14.2211C39.8987 14.0474 39.4935 13.9577 39.0834 13.9583C38.4311 13.9571 37.799 14.1842 37.2967 14.6004C37.014 14.8348 36.7804 15.1226 36.6091 15.4474C36.4378 15.7722 36.3323 16.1276 36.2986 16.4932C36.2649 16.8589 36.3036 17.2276 36.4126 17.5782C36.5216 17.9289 36.6987 18.2546 36.9338 18.5367L47.0675 30.7083L13.9584 30.7083C13.218 30.7083 12.5079 31.0025 11.9844 31.526C11.4608 32.0495 11.1667 32.7596 11.1667 33.5C11.1667 34.2404 11.4608 34.9505 11.9844 35.474C12.5079 35.9976 13.218 36.2917 13.9584 36.2917Z"
        fill="black"
      />
    </SVGStyled>
  )
}

export function Arrow({ css, ...rest }: IconProps) {
  return (
    <SVGStyled width="24" height="24" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg" css={{ ...css }} {...rest}>
      <path
        d="M2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18C5.59 18 2 14.41 2 10ZM-4.37114e-07 10C-1.95827e-07 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 -6.78401e-07 10 -4.37114e-07C4.48 -1.95827e-07 -6.78401e-07 4.48 -4.37114e-07 10ZM10 9L7 9C6.45 9 6 9.45 6 10C6 10.55 6.45 11 7 11L10 11L10 12.79C10 13.24 10.54 13.46 10.85 13.14L13.64 10.35C13.84 10.15 13.84 9.84 13.64 9.64L10.85 6.85C10.54 6.54 10 6.76 10 7.2L10 9V9Z"
        fill="inherit"
      />
    </SVGStyled>
  )
}

export function Telegram({ css, ...rest }: IconProps) {
  return (
    <SVGStyled width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" css={{ ...css }} {...rest}>
      <path
        d="M32.2958 4.58633C31.7708 4.14113 30.9462 4.07743 30.0936 4.41973H30.0922C29.1955 4.77953 4.70953 15.2823 3.71273 15.7114C3.53143 15.7744 1.94803 16.3652 2.11113 17.6812C2.25673 18.8677 3.52933 19.3591 3.68473 19.4158L9.90983 21.5473C10.3228 22.9221 11.8453 27.9943 12.182 29.0779C12.392 29.7534 12.7343 30.641 13.3342 30.8237C13.8606 31.0267 14.3842 30.8412 14.723 30.5752L18.5289 27.0451L24.6728 31.8366L24.8191 31.9241C25.2363 32.1089 25.636 32.2013 26.0175 32.2013C26.3122 32.2013 26.595 32.146 26.8652 32.0354C27.7857 31.6574 28.1539 30.7803 28.1924 30.6809L32.7816 6.82703C33.0616 5.55303 32.6724 4.90483 32.2958 4.58633ZM15.3999 22.3999L13.2999 27.9999L11.1999 20.9999L27.2999 9.09993L15.3999 22.3999Z"
        fill="white"
      />
    </SVGStyled>
  )
}
export function Instagram({ css, ...rest }: IconProps) {
  return (
    <SVGStyled width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" css={{ ...css }} {...rest}>
      <path
        d="M11.6667 4.375C7.64021 4.375 4.375 7.64021 4.375 11.6667V23.3333C4.375 27.3598 7.64021 30.625 11.6667 30.625H23.3333C27.3598 30.625 30.625 27.3598 30.625 23.3333V11.6667C30.625 7.64021 27.3598 4.375 23.3333 4.375H11.6667ZM26.25 7.29167C27.055 7.29167 27.7083 7.945 27.7083 8.75C27.7083 9.555 27.055 10.2083 26.25 10.2083C25.445 10.2083 24.7917 9.555 24.7917 8.75C24.7917 7.945 25.445 7.29167 26.25 7.29167ZM17.5 10.2083C21.5265 10.2083 24.7917 13.4735 24.7917 17.5C24.7917 21.5265 21.5265 24.7917 17.5 24.7917C13.4735 24.7917 10.2083 21.5265 10.2083 17.5C10.2083 13.4735 13.4735 10.2083 17.5 10.2083ZM17.5 13.125C16.3397 13.125 15.2269 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2269 21.4141 16.3397 21.875 17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.4141 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.4141 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125Z"
        fill="white"
      />
    </SVGStyled>
  )
}

export function Github({ css, ...rest }: IconProps) {
  return (
    <SVGStyled width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" css={{ ...css }} {...rest}>
      <path
        d="M17.5 3.5C9.7685 3.5 3.5 9.7685 3.5 17.5C3.5 24.0602 8.01733 29.5493 14.1073 31.0683C14.042 30.8793 14 30.66 14 30.3882V27.9953C13.4318 27.9953 12.4798 27.9953 12.2407 27.9953C11.2828 27.9953 10.4312 27.5835 10.0182 26.8182C9.55967 25.9677 9.48033 24.6668 8.344 23.8712C8.00683 23.6063 8.2635 23.3042 8.652 23.345C9.3695 23.548 9.9645 24.0403 10.5245 24.7707C11.0822 25.5022 11.3447 25.6678 12.3865 25.6678C12.8917 25.6678 13.6477 25.6387 14.3593 25.5267C14.742 24.5548 15.4035 23.66 16.212 23.2377C11.55 22.7582 9.32517 20.4388 9.32517 17.29C9.32517 15.9343 9.90267 14.623 10.8838 13.5182C10.5618 12.4215 10.157 10.185 11.0075 9.33333C13.1052 9.33333 14.3733 10.6937 14.6778 11.0612C15.7232 10.703 16.8712 10.5 18.0775 10.5C19.2862 10.5 20.4388 10.703 21.4865 11.0635C21.7875 10.6983 23.0568 9.33333 25.1592 9.33333C26.0132 10.1862 25.6037 12.432 25.2782 13.5263C26.2535 14.6288 26.8275 15.9367 26.8275 17.29C26.8275 20.4365 24.6062 22.7547 19.9512 23.2365C21.2322 23.905 22.1667 25.7833 22.1667 27.1985V30.3882C22.1667 30.5095 22.1398 30.597 22.1258 30.7008C27.5812 28.7887 31.5 23.6087 31.5 17.5C31.5 9.7685 25.2315 3.5 17.5 3.5Z"
        fill="white"
      />
    </SVGStyled>
  )
}
export function Linkedin({ css, ...rest }: IconProps) {
  return (
    <SVGStyled width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" css={{ ...css }} {...rest}>
      <path
        d="M28.0001 4.66675H7.00008C5.71091 4.66675 4.66675 5.71091 4.66675 7.00008V28.0001C4.66675 29.2892 5.71091 30.3334 7.00008 30.3334H28.0001C29.2892 30.3334 30.3334 29.2892 30.3334 28.0001V7.00008C30.3334 5.71091 29.2892 4.66675 28.0001 4.66675ZM12.7797 25.6667H9.33808V14.5927H12.7797V25.6667ZM11.0239 13.0096C9.91441 13.0096 9.01725 12.1101 9.01725 11.0029C9.01725 9.89575 9.91558 8.99741 11.0239 8.99741C12.1299 8.99741 13.0294 9.89691 13.0294 11.0029C13.0294 12.1101 12.1299 13.0096 11.0239 13.0096ZM25.6714 25.6667H22.2321V20.2814C22.2321 18.9969 22.2087 17.3449 20.4436 17.3449C18.6527 17.3449 18.3774 18.7437 18.3774 20.1881V25.6667H14.9381V14.5927H18.2397V16.1059H18.2864C18.7461 15.2356 19.8684 14.3174 21.5426 14.3174C25.0274 14.3174 25.6714 16.6111 25.6714 19.5931V25.6667V25.6667Z"
        fill="white"
      />
    </SVGStyled>
  )
}
