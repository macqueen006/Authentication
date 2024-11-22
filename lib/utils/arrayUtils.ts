// utility function (e.g., helpers)
export const Str = {
  of(string: string): { lower: () => string } {
    return {
      lower: () => string.toLowerCase(),
    };
  },
};
