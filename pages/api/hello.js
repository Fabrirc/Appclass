// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let usuarioValidado = "John Doe";

export default function handler(req, res) {
  if (req.body.name === usuarioValidado) {
    res.status(200).json({ validacion: "Usuario validado" });
  } else {
    res.status(200).json({ validacion: "Usuario no validado" });
  }
}
