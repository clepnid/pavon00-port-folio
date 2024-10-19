import React, { Component } from "react";
import PropTypes from "prop-types";

class Pixelify extends Component {
  canvas = null;

  componentDidMount() {
    this.pixelify(this.props);
  }

  componentDidUpdate() {
    this.pixelify(this.props);
  }

  pixelify({ src, width, height, pixelSize, centered, fillTransparencyColor, onIsLoad }) {
    pixelSize = parseInt(pixelSize, 10);

    // crear la imagen que luego será pintada en el canvas
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    // una vez que la imagen está cargada
    img.onload = () => {
      // Hack para mejorar el rendimiento de clipping en Firefox
      const originalClip = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function () { };
      const canvas = this.canvas;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });

      // Ajustar el tamaño de la imagen y del canvas
      img.width = width ? width : img.width;
      img.height = height ? height : img.height;
      canvas.width = img.width;
      canvas.height = img.height;


      // Pintar la imagen en el canvas
      ctx.drawImage(img, 0, 0, width, img.height);

      // Restaurar la función original de clip
      CanvasRenderingContext2D.prototype.clip = originalClip;

      this.paintPixels(ctx, img, pixelSize, centered, fillTransparencyColor);
      onIsLoad(canvas.toDataURL());
      img = null;
    };
  }

  paintPixels(ctx, img, pixelSize, centered, fillTransparencyColor) {
    const { transparency } = this.props;
    let x = 0, y = 0;

    const step = () => {
      for (; x < img.width + pixelSize; x += pixelSize) {
        for (; y < img.height + pixelSize; y += pixelSize) {
          let xColorPick = x;
          let yColorPick = y;

          if (x >= img.width) {
            xColorPick = x - (pixelSize - (img.width % pixelSize) / 2) + 1;
          }
          if (y >= img.height) {
            yColorPick = y - (pixelSize - (img.height % pixelSize) / 2) + 1;
          }

          const rgba = ctx.getImageData(xColorPick, yColorPick, 1, 1).data;

          // Si el canal alpha es 0 (transparencia) y la opción transparency es true, no rellenar el píxel
          if (rgba[3] === 0 && transparency) {
            continue;
          }

          // Si el canal alpha es 0 y transparency es false, rellenar con el color de transparencia
          ctx.fillStyle =
            rgba[3] === 0
              ? fillTransparencyColor
              : `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`;

          if (centered) {
            ctx.fillRect(
              parseInt(x - (pixelSize - (img.width % pixelSize) / 2), 10),
              parseInt(y - (pixelSize - (img.height % pixelSize) / 2), 10),
              pixelSize,
              pixelSize
            );
          } else {
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
        y = 0; // Reiniciar y después de cada fila
      }
    };

    step();
  }

  render() {
    return (
      <canvas
        className={this.props.className}
        ref={(canvas) => {
          this.canvas = canvas;
        }}
      />
    );
  }
}

Pixelify.propTypes = {
  src: PropTypes.string.isRequired,
  pixelSize: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  centered: PropTypes.bool,
  fillTransparencyColor: PropTypes.string,
  transparency: PropTypes.bool, 
  onIsLoad: PropTypes.func,
};

Pixelify.defaultProps = {
  centered: false,
  fillTransparencyColor: "white",
  transparency: false, // Valor por defecto para transparencia
  onIsLoad: () => {},
};

export default Pixelify;
