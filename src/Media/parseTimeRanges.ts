const parseTimeRanges = (ranges) => {
  const result = [];

  for (let i = 0; i < ranges.length; i++) {
    result.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return result;
};

export default parseTimeRanges;
