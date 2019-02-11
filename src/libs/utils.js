export const getClasses = (classesSpec) => {
  return Object.keys(classesSpec).filter(className => classesSpec[className])
    .reduce((classBatch, className) => `${classBatch} ${className}`, '');
};
