# Prints do portfólio

Cada projeto tem sua pasta: `public/portfolio/<id>/`. Coloque aqui as imagens
(`.png`, `.jpg`, `.jpeg`, `.webp` ou `.avif`).

- A ordem do carrossel segue a ordem alfabética do nome do arquivo — use prefixos
  numéricos: `01-dashboard.png`, `02-mapa.png`, `03-ocorrencias.png`, etc.
- Não é preciso mexer em código: o carrossel lê automaticamente todos os arquivos
  da pasta no build. Sem imagens, aparece um placeholder discreto.
- Recomendado: largura ~1600px, proporção 16:9, otimizadas (`.webp`).

## Adicionar um projeto

1. Crie `public/portfolio/<id>/` e jogue os prints.
2. Adicione um item com o mesmo `id` em [`src/data/portfolio.json`](../../src/data/portfolio.json):

```jsonc
{
  "id": "meu-projeto",
  "type": "personal",        // "personal" = pessoal (mostra repos/demo)
                             // "client"   = trabalho corporativo (sem repo,
                             //              selo de projeto proprietário)
  "company": null,           // ou "Nome da Empresa" (aparece como "@ Empresa")
  "year": "2025",
  "logo": "https://.../logo.png",
  "demo": "https://...",     // link da demo (personal) ou página oficial (client)
  "repos": [                 // deixe [] para projetos corporativos
    { "label": "Frontend", "url": "https://github.com/..." }
  ],
  "tech": ["...", "..."],
  "name":        { "pt": "...", "en": "..." },
  "tagline":     { "pt": "...", "en": "..." },
  "description": { "pt": "...", "en": "..." },
  "highlights":  { "pt": ["...", "..."], "en": ["...", "..."] }
}
```
