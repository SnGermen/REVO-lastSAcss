function toggleDisplay() {
  const blocks = [
    document.querySelector('block1'),
    document.querySelector('block2'),
    document.querySelector('block3')
  ];

  // Find the currently visible block
  let visibleIndex = blocks.findIndex(block => block.classList.contains('visible'));

  // Hide the current visible block
  blocks[visibleIndex].classList.remove('visible');

  // Show the next block in the sequence, wrapping around to the first block
  let nextIndex = (visibleIndex + 1) % blocks.length;
  blocks[nextIndex].classList.add('visible');
}