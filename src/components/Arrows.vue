<template>
  <div>
    <div class="link-container">
      <h2>Hovering on the whole panel does the animation</h2>
      <div class="link">
        <p
          class="link__text"
        >Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <div class="box-diagonal">
          <svg viewBox="0 0 32 32" height="16px" width="16px">
            <path
              d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="form-container">
      <h2>Hovering on the whole panel does the animation</h2>
      <div class="form">
        <p class="form__label">Self Service form</p>
        <div class="form__info">
          <div class="form__text">
            <h3>Notification of change of address</h3>
            <p>Lorem ipsum dolar sit amet lorem ipsum dolar sit amet.</p>
          </div>
          <div class="box-sideways">
            <svg viewBox="0 0 32 32" height="16px" width="16px">
              <path
                d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="download-container">
      <h2>Hovering on the whole panel does the animation</h2>
      <div class="download">
        <img
          class="download__image"
          src="http://accessible-news.co.uk/wp-content/uploads/2017/09/Welsh-Water-276x400.png"
        />
        <div class="download__text">
          <h2 class="download__text-title">Student information leaflet</h2>
          <p class="download__text-para">Lorem ipsum dolar sit amet lorem ipsum dolar sit amet.</p>
          <div class="download__download">
            <p>PDF, 249kb</p>
            <div class="box-down">
              <svg viewBox="0 0 32 32" height="16px" width="16px">
                <path
                  d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="download-container">
      <h2>Hovering on the PDF does the animation</h2>
      <div class="download download--hover">
        <img
          class="download__image"
          src="http://accessible-news.co.uk/wp-content/uploads/2017/09/Welsh-Water-276x400.png"
        />
        <div class="download__text">
          <h2 class="download__text-title">Student information leaflet</h2>
          <p class="download__text-para">Lorem ipsum dolar sit amet lorem ipsum dolar sit amet.</p>
          <div class="download__download">
            <p>PDF, 249kb</p>
            <div class="box-down">
              <svg viewBox="0 0 32 32" height="16px" width="16px">
                <path
                  d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "arrows"
};
</script>

<style lang="scss" scoped>
.link-container {
  padding: 30px;
  margin: 30px;
  background: #f5f7f8;
}
.link {
  margin: auto;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #eaeef0;
  cursor: pointer;
  &__text {
    width: 90%;
    margin: 0;
    text-align: left;
  }
  &:hover {
    svg {
      animation: moveArrowDiagonal 1s ease-in-out;
    }
  }
}
.box-diagonal {
  height: 32px;
  width: 32px;
  background: #b2c2c7;
  position: relative;
  overflow: hidden;
  svg {
    fill: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(0) translateX(0) rotate(-45deg);
  }
}

@keyframes moveArrowDiagonal {
  0% {
    transform: translateY(0) translateX(0) rotate(-45deg);
  }
  30% {
    transform: translateY(-30px) translateX(30px) rotate(-45deg);
    opacity: 0;
  }
  35% {
    opacity: 0;
    transform: translateY(30px) translateX(-30px) rotate(-45deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(-45deg);
  }
}
.form-container {
  padding: 30px;
  margin: 30px;
  background: #f5f7f8;
}

.form {
  padding: 30px;
  width: 760px;
  margin: auto;
  cursor: pointer;
  background: white;
  &__label {
    margin: -30px auto auto 0px;
    padding: 5px 10px;
    border-radius: 4px;
    width: 140px;
    background: #65858f;
    color: white;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
  &__text {
    text-align: left;
  }
  &:hover {
    svg {
      animation: moveArrowSideways 1s ease-in-out;
    }
  }
}

.box-sideways {
  margin: 30px 0 0 0;
  height: 32px;
  width: 32px;
  background: #b2c2c7;
  position: relative;
  overflow: hidden;
  svg {
    fill: white;
    position: absolute;
    top: 8px;
    right: 8px;
    transform: translateY(0) translateX(0);
  }
}

@keyframes moveArrowSideways {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(30px);
    opacity: 0;
  }
  35% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.download-container {
  border: 2px solid black;
  padding: 30px;
  margin: 30px;
}
.download {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 780px;
  margin: auto;

  &:hover {
    svg {
      animation: moveArrowDown 1s ease-in-out;
    }
  }
  &__download {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-top: 1px solid #b2c2c7;
  }
  &__text {
    text-align: left;
    width: 260px;
    margin: auto;
  }
  &__text-para {
    padding: 0 0 30px 0;
    margin: 0;
  }
}
.download--hover {
  cursor: default;
  &:hover {
    svg {
      animation: none;
    }
  }
  .download__download {
    cursor: pointer;
    &:hover {
      svg {
        animation: moveArrowDown 1s ease-in-out;
      }
    }
  }
}

.box-down {
  height: 32px;
  width: 32px;
  background: #b2c2c7;
  position: relative;
  overflow: hidden;
  svg {
    fill: white;
    position: absolute;
    top: 8px;
    right: 8px;
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes moveArrowDown {
  0% {
    transform: translateY(0) rotate(90deg);
  }
  30% {
    transform: translateY(30px) rotate(90deg);
    opacity: 0;
  }
  35% {
    opacity: 0;
    transform: translateY(-30px) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(90deg);
  }
}
</style>