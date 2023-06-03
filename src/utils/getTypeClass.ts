export const getTypeClass = (type: string) => {
  switch (type) {
    case 'normal':
      return 'bg-gray-700 text-white';
    case 'fire':
      return 'bg-red-600 text-white';
    case 'water':
      return 'bg-blue-500 text-white';
    case 'electric':
      return 'bg-yellow-500 text-black';
    case 'grass':
      return 'bg-green-500 text-white';
    case 'poison':
      return 'bg-purple-600 text-white';
    case 'ground':
      return 'bg-yellow-900 text-white';
    case 'fairy':
      return 'bg-pink-400 text-black';
    case 'bug':
      return 'bg-green-900 text-white';
    default:
      return 'bg-slate-300 text-black';
  }
};
