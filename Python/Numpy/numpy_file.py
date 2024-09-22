import numpy, array

new_array = numpy.array([34, 562,25, 8, 96, 535, 253])
prime = numpy.array([2, 3, 5, 7, 11])

data_type1 = type(new_array)
data_type2 = new_array.dtype

duplicate_array = new_array.copy()

concatenation = numpy.concatenate((new_array, prime))

sorting = numpy.sort(new_array)

py_list = array.array('i', new_array)

py_list.append(123)

numpy_converted = numpy.array(py_list)

print(numpy_converted)