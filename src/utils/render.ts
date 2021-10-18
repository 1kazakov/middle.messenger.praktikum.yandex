export default function render(query: string, block: any) {
  const root = document.querySelector(query);
  console.log('root', root);
  console.log('query', query);
  root.append(block.getContent());
}
