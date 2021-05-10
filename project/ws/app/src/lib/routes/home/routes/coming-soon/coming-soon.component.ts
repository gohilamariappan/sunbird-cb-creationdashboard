import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

/**
 * We can move this card to Common components later
 */

@Component({
  selector: 'ws-app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {
  particles: any[] = []
  context!: CanvasRenderingContext2D | null
  mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }

  // canvas = document.getElementById('background')
  @ViewChild('container', { static: true })
  container!: ElementRef

  @ViewChild('canvasEl', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>
  constructor() {
    for (let i = 0; i < 25; i += 1) {
      this.particles.push({
        x: Math.random() > .5 ? 0 : window.innerWidth,
        y: window.innerHeight / 2,
        vx: (Math.random() * 2) - 1,
        vy: (Math.random() * 2 - 1),
        history: [],
        size: 4 + Math.random() * 6,
        color: Math.random() > .5 ? '#000000' : Math.random() > .5 ? '#FF0000' : '#FFFF00',
      })
    }
  }
  ngOnInit() {
    if (this.canvas && this.canvas.nativeElement.getContext('2d')) {
      this.context = this.canvas.nativeElement.getContext('2d')
      this.initialize()
    }
  }

  initialize() {
    if (this.canvas) {
      this.canvas.nativeElement.addEventListener('mousemove', this.mouseMove.bind(this), false)
      window.addEventListener('resize', this.resizeCanvas.bind(this), false)
      this.timeUpdate()
      if (this.context) {
        this.context.beginPath()
      }
      this.resizeCanvas()
    }
  }

  timeUpdate() {
    if (this.context) {
      this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = 0; i < this.particles.length; i += 1) {
        this.particles[i].x += this.particles[i].vx
        this.particles[i].y += this.particles[i].vy

        if (this.particles[i].x > window.innerWidth) {
          this.particles[i].vx = -1 - Math.random()
        } else if (this.particles[i].x < 0) {
          this.particles[i].vx = 1 + Math.random()
        } else {
          this.particles[i].vx *= 1 + (Math.random() * 0.005)
        }

        if (this.particles[i].y > window.innerHeight) {
          this.particles[i].vy = -1 - Math.random()
        } else if (this.particles[i].y < 0) {
          this.particles[i].vy = 1 + Math.random()
        } else {
          this.particles[i].vy *= 1 + (Math.random() * 0.005)
        }

        this.context.strokeStyle = this.particles[i].color
        this.context.beginPath()
        for (let j = 0; j < this.particles[i].history.length; j += 1) {
          this.context.lineTo(this.particles[i].history[j].x, this.particles[i].history[j].y)
        }
        this.context.stroke()

        this.particles[i].history.push({
          x: this.particles[i].x,
          y: this.particles[i].y,
        })
        if (this.particles[i].history.length > 45) {
          this.particles[i].history.shift()
        }

        for (let j = 0; j < this.particles[i].history.length; j += 1) {
          this.particles[i].history[j].x += 0.01 * (this.mouse.x - this.particles[i].history[j].x) / (45 / j)
          this.particles[i].history[j].y += 0.01 * (this.mouse.y - this.particles[i].history[j].y) / (45 / j)
        }

        let distanceFactor = this.distanceBetween(this.mouse, this.particles[i])
        distanceFactor = Math.pow(Math.max(Math.min(10 - (distanceFactor / 10), 10), 2), 1)

        this.context.fillStyle = this.particles[i].color
        this.context.beginPath()
        // this.context.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size * distanceFactor, 0, Math.PI * 2, true)
        this.context.closePath()
        this.context.fill()

      }

      requestAnimationFrame(this.timeUpdate.bind(this))
    }
  }

  mouseMove(e: any) {
    this.mouse.x = e.layerX
    this.mouse.y = e.layerY

    // context.fillRect(e.layerX, e.layerY, 5, 5);
    // dDraw( e.layerX, e.layerY );
  }

  draw(x: any, y: any) {
    if (this.context) {
      this.context.strokeStyle = '#ff0000'
      this.context.lineWidth = 4
      this.context.lineTo(x, y)
      this.context.stroke()
    }
  }

  resizeCanvas() {
    this.canvas.nativeElement.width = this.container.nativeElement.offsetWidth - 300
    this.canvas.nativeElement.height = this.container.nativeElement.offsetHeight - 156
  }

  distanceBetween(p1: any, p2: any) {
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    return Math.sqrt(dx * dx + dy * dy)
  }

}
