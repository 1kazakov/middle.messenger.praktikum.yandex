export default function render(query: string, block: any) {
  const root = document.querySelector(query);
  root.append(block.getContent());
}
