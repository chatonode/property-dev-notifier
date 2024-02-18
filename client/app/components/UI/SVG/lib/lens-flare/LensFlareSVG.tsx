const LensFlare = () => {
  return (
    <div
      style={{
        position: 'absolute',
        content: '',
        width: '600px',
        height: '600px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <svg height="100%" width="100%">
        <defs>
          <radialGradient
            id="0"
            gradientTransform="translate(-0.25 -0.25) scale(1, 1)"
          >
            <stop offset="1%" stop-color="rgba(255, 204, 214, 0.3)" />
            <stop offset="8%" stop-color="rgba(255, 210, 219, 0.3)" />
            <stop offset="15%" stop-color="rgba(255, 216, 224, 0.3)" />
            <stop offset="22%" stop-color="rgba(255, 222, 228, 0.3)" />
            <stop offset="29%" stop-color="rgba(255, 228, 233, 0.3)" />
            <stop offset="36%" stop-color="rgba(255, 233, 238, 0.3)" />
            <stop offset="50%" stop-color="rgba(255, 245, 247, 0.3)" />
            <stop offset="57.14%" stop-color="rgba(255, 245, 247, 0.26)" />
            <stop offset="64.29%" stop-color="rgba(255, 245, 247, 0.21)" />
            <stop offset="71.43%" stop-color="rgba(255, 245, 247, 0.17)" />
            <stop offset="78.57%" stop-color="rgba(255, 245, 247, 0.13)" />
            <stop offset="85.71%" stop-color="rgba(255, 245, 247, 0.09)" />
            <stop offset="100%" stop-color="rgba(255, 245, 247, 0)" />
          </radialGradient>
          <radialGradient
            id="1"
            gradientTransform="translate(0.1 0.1) scale(0.5, 0.5)"
          >
            <stop offset="0%" stop-color="#fffff0" />
            <stop offset="2%" stop-color="#fffefc" />
            <stop offset="4%" stop-color="#fffefd" />
            <stop offset="6%" stop-color="#fffefe" />
            <stop offset="8%" stop-color="#fffffe" />
            <stop offset="10%" stop-color="#ffffff" />
            <stop offset="14%" stop-color="#ffffff" />
            <stop offset="22%" stop-color="rgba(251, 250, 250, 0.86)" />
            <stop offset="30%" stop-color="rgba(249, 245, 246, 0.71)" />
            <stop offset="38%" stop-color="rgba(247, 240, 241, 0.57)" />
            <stop offset="46%" stop-color="rgba(247, 234, 235, 0.43)" />
            <stop offset="54%" stop-color="rgba(248, 228, 229, 0.29)" />
            <stop offset="70%" stop-color="rgba(254, 215, 215, 0)" />
          </radialGradient>
          <radialGradient
            id="2"
            gradientTransform="translate(-0.65 -0.65) scale(2, 2)"
          >
            <stop offset="0%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="6%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="12%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="18%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="24%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="30%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="42%" stop-color="rgba(26, 32, 44, 0)" />
            <stop offset="42.71%" stop-color="rgba(28, 29, 56, 0.01)" />
            <stop offset="43.43%" stop-color="rgba(36, 28, 51, 0.02)" />
            <stop offset="44.14%" stop-color="rgba(39, 27, 46, 0.03)" />
            <stop offset="44.86%" stop-color="rgba(41, 27, 43, 0.03)" />
            <stop offset="45.57%" stop-color="rgba(43, 26, 40, 0.04)" />
            <stop offset="47%" stop-color="rgba(45, 26, 34, 0.06)" />
          </radialGradient>
          <radialGradient
            id="3"
            gradientTransform="translate(0 0) scale(0.5, 0.5)"
          >
            <stop offset="0%" stop-color="rgba(246, 224, 94, 0)" />
            <stop offset="2.86%" stop-color="rgba(248, 228, 96, 0.05)" />
            <stop offset="5.71%" stop-color="rgba(250, 233, 97, 0.11)" />
            <stop offset="8.57%" stop-color="rgba(252, 237, 99, 0.16)" />
            <stop offset="11.43%" stop-color="rgba(252, 241, 118, 0.21)" />
            <stop offset="14.29%" stop-color="rgba(253, 245, 140, 0.26)" />
            <stop offset="20%" stop-color="rgba(254, 252, 190, 0.37)" />
            <stop offset="20.29%" stop-color="rgba(253, 249, 163, 0.32)" />
            <stop offset="20.57%" stop-color="rgba(253, 245, 140, 0.26)" />
            <stop offset="20.86%" stop-color="rgba(252, 241, 118, 0.21)" />
            <stop offset="21.14%" stop-color="rgba(252, 237, 99, 0.16)" />
            <stop offset="21.43%" stop-color="rgba(250, 233, 97, 0.11)" />
            <stop offset="22%" stop-color="rgba(246, 224, 94, 0)" />
          </radialGradient>
          <radialGradient
            id="4"
            gradientTransform="translate(0.1 0.1) scale(0.5, 0.5)"
          >
            <stop offset="44%" stop-color="rgba(230, 138, 0, 0)" />
            <stop offset="44.86%" stop-color="rgba(230, 127, 0, 0.02)" />
            <stop offset="45.71%" stop-color="rgba(230, 115, 0, 0.05)" />
            <stop offset="46.57%" stop-color="rgba(231, 101, 0, 0.07)" />
            <stop offset="47.43%" stop-color="rgba(234, 84, 0, 0.1)" />
            <stop offset="48.29%" stop-color="rgba(240, 58, 0, 0.12)" />
            <stop offset="50%" stop-color="rgba(230, 0, 69, 0.17)" />
            <stop offset="50.57%" stop-color="rgba(235, 0, 57, 0.15)" />
            <stop offset="51.14%" stop-color="rgba(240, 0, 40, 0.12)" />
            <stop offset="51.71%" stop-color="rgba(244, 6, 0, 0.1)" />
            <stop offset="52.29%" stop-color="rgba(240, 43, 0, 0.07)" />
            <stop offset="52.86%" stop-color="rgba(236, 59, 0, 0.05)" />
            <stop offset="54%" stop-color="rgba(230, 80, 0, 0)" />
          </radialGradient>
          <radialGradient
            id="5"
            gradientTransform="translate(0.25 0.25) scale(0.5, 0.5)"
          >
            <stop offset="0%" stop-color="rgba(51, 112, 255, 0.1)" />
            <stop offset="2%" stop-color="rgba(47, 122, 255, 0.12)" />
            <stop offset="4%" stop-color="rgba(47, 131, 255, 0.14)" />
            <stop offset="6%" stop-color="rgba(49, 139, 255, 0.16)" />
            <stop offset="8%" stop-color="rgba(55, 148, 255, 0.19)" />
            <stop offset="10%" stop-color="rgba(63, 156, 255, 0.21)" />
            <stop offset="14%" stop-color="rgba(82, 171, 255, 0.25)" />
            <stop offset="14.14%" stop-color="rgba(79, 166, 255, 0.21)" />
            <stop offset="14.29%" stop-color="rgba(78, 161, 255, 0.18)" />
            <stop offset="14.43%" stop-color="rgba(77, 156, 255, 0.14)" />
            <stop offset="14.57%" stop-color="rgba(77, 151, 255, 0.11)" />
            <stop offset="14.71%" stop-color="rgba(78, 145, 255, 0.07)" />
            <stop offset="15%" stop-color="rgba(82, 134, 255, 0)" />
          </radialGradient>
          <radialGradient
            id="6"
            gradientTransform="translate(0.25 0.25) scale(0.8, 0.8)"
          >
            <stop offset="13%" stop-color="rgba(27, 199, 0, 0.04)" />
            <stop offset="13.71%" stop-color="rgba(86, 207, 0, 0.07)" />
            <stop offset="14.43%" stop-color="rgba(119, 215, 0, 0.1)" />
            <stop offset="15.14%" stop-color="rgba(146, 224, 0, 0.13)" />
            <stop offset="15.86%" stop-color="rgba(170, 232, 0, 0.16)" />
            <stop offset="16.57%" stop-color="rgba(193, 241, 0, 0.19)" />
            <stop offset="18%" stop-color="rgba(239, 255, 117, 0.25)" />
            <stop offset="18.57%" stop-color="rgba(239, 255, 117, 0.22)" />
            <stop offset="19.14%" stop-color="rgba(239, 255, 117, 0.19)" />
            <stop offset="19.71%" stop-color="rgba(239, 255, 117, 0.16)" />
            <stop offset="20.29%" stop-color="rgba(239, 255, 117, 0.13)" />
            <stop offset="20.86%" stop-color="rgba(239, 255, 117, 0.1)" />
            <stop offset="22%" stop-color="rgba(239, 255, 117, 0.04)" />
          </radialGradient>
          <radialGradient
            id="7"
            gradientTransform="translate(0.45 0.45) scale(0.5, 0.5)"
          >
            <stop offset="93%" stop-color="rgba(0, 0, 255, 0)" />
            <stop offset="93.14%" stop-color="rgba(0, 0, 255, 0.01)" />
            <stop offset="93.29%" stop-color="rgba(0, 0, 255, 0.03)" />
            <stop offset="93.43%" stop-color="rgba(0, 0, 255, 0.04)" />
            <stop offset="93.57%" stop-color="rgba(0, 0, 255, 0.05)" />
            <stop offset="93.71%" stop-color="rgba(0, 0, 255, 0.06)" />
            <stop offset="94%" stop-color="rgba(0, 0, 255, 0.09)" />
            <stop offset="94.14%" stop-color="rgba(0, 99, 159, 0.09)" />
            <stop offset="94.29%" stop-color="rgba(0, 124, 157, 0.08)" />
            <stop offset="94.43%" stop-color="rgba(0, 149, 162, 0.08)" />
            <stop offset="94.57%" stop-color="rgba(0, 173, 168, 0.07)" />
            <stop offset="94.71%" stop-color="rgba(0, 199, 168, 0.07)" />
            <stop offset="95%" stop-color="rgba(0, 255, 0, 0.06)" />
            <stop offset="95.29%" stop-color="rgba(111, 254, 0, 0.08)" />
            <stop offset="95.57%" stop-color="rgba(150, 254, 0, 0.09)" />
            <stop offset="95.86%" stop-color="rgba(177, 254, 0, 0.11)" />
            <stop offset="96.14%" stop-color="rgba(200, 254, 0, 0.12)" />
            <stop offset="96.43%" stop-color="rgba(220, 254, 0, 0.14)" />
            <stop offset="97%" stop-color="rgba(255, 255, 0, 0.17)" />
            <stop offset="97.14%" stop-color="rgba(255, 230, 57, 0.16)" />
            <stop offset="97.29%" stop-color="rgba(254, 206, 0, 0.15)" />
            <stop offset="97.43%" stop-color="rgba(250, 182, 0, 0.14)" />
            <stop offset="97.57%" stop-color="rgba(246, 157, 0, 0.13)" />
            <stop offset="97.71%" stop-color="rgba(243, 130, 0, 0.12)" />
            <stop offset="98%" stop-color="rgba(255, 0, 0, 0.1)" />
            <stop offset="98.29%" stop-color="rgba(255, 0, 0, 0.09)" />
            <stop offset="98.57%" stop-color="rgba(255, 0, 0, 0.07)" />
            <stop offset="98.86%" stop-color="rgba(255, 0, 0, 0.06)" />
            <stop offset="99.14%" stop-color="rgba(255, 0, 0, 0.04)" />
            <stop offset="99.43%" stop-color="rgba(255, 0, 0, 0.03)" />
            <stop offset="100%" stop-color="rgba(255, 0, 0, 0)" />
          </radialGradient>
        </defs>
        <rect fill="url(#0)" height="100%" width="100%" />
        <rect fill="url(#1)" height="100%" width="100%" />
        <rect fill="url(#2)" height="100%" width="100%" />
        <rect fill="url(#3)" height="100%" width="100%" />
        <rect fill="url(#4)" height="100%" width="100%" />
        <rect fill="url(#5)" height="100%" width="100%" />
        <rect fill="url(#6)" height="100%" width="100%" />
        <rect fill="url(#7)" height="100%" width="100%" />
      </svg>
    </div>
  )
}

export default LensFlare
