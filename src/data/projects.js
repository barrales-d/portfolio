export const projects = [
  {
    title: "Console Graphics",
    image: "console-graphics-collage.jpg",
    github: "https://github.com/barrales-d/ConsoleGraphics",
    short_desc: "This project is a small and simple 2D graphics library in C++ design to create pixel drawings that are viewable from a terminal.",
    long_desc: `
    I built a 2D graphics library in C++ over the summer to render objects in console/terminal. 
    I strived to study more C++ specific features by working on an object oriented programming project. 
    This project allows users to create primitive shapes, such as: rectangles, circles, triangles, lines, and even text!
    \n\n
    Using Github, I was able to experiement with version control and document my whole process. I created two version(both on Github)
    one under the main and the other under a legacy branch.`,
  },
  {
    title: "Astro",
    image: "astro-gui.png",
    github: "https://github.com/barrales-d/Astro",
    short_desc: "Asteroid Clone in Python using Pygame. Made for my CPSC 386(Game Design) final project",
    long_desc: `
    This is a 2D game in which you control a ship flying through an endless asteroid field, and goal is to destroy
    as many as possible. I created the pixel art and animations and use open source sounds and music.
    \n\n
    Since this was a project for my game design course, I was learning python through the semester by making small, simple
    programs. But this was the final project so I knew I had to create something impressive for it right? Well what I think is the most impressive
    part about this project is my Animation System. I created a reusable system that is able to split up any spritesheet
    into multiple frames, which it then uses to animation the sprite at a fixed framerate. The best part is that the user is
    able to declare multiple animations from one spritesheet and play any of them at whenever they want.`,
  },
  {
    title: "Qubic",
    image: "qubic-ai-gui.jpg",
    github: "https://github.com/barrales-d/Qubic",
    short_desc: "A 3D tic-tac-toe game: Qubic, created for my AI course.",
    long_desc: `
    Qubic is a 3D tic-tac-toe variant in which two players take turns to place pieces on a 4x4x4 cube board consisting of 64 cells.
    The goal is to get four pieces lined up in a row. I wanted to implement a competitive AI agent that humans can play against.
    In addition, I created a way to visualize the game graphical user interface that humans can use to play the game.
    \n\n
    Since this game is a competitive environment, the algorithms I decided to implement were two Adversarial Search Algorithms: 
    MiniMax and Alpha Beta Pruning. I wrote these algortihms with a max depth limit because the game tree does grow fairly large.
    Due to these space limitations, These are not Perfect Players, meaning they make mistakes when figuring out the next best move.`,
  },
  // TODO: Add more projects and add more content to exists one to make a full blog post
]