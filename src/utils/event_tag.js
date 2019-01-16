function eventTag(tag) {
  if (typeof tag == 'string') {
    tag = tag.toLowerCase();
    console.log(tag)
    switch (tag) {
      case 'management':
        return "label-primary";
      case 'developer':
      case 'development':
        return "label-success";
      case 'design':
        return "label-info";
      case 'marketing':
        return "label-warning";
      case 'business':
        return "label-danger";
      default :
        return "label-default";
    }
  } else if (typeof tag == 'array') {
    return "label-colored";
  }
  console.log('was expecting either a string with the tag name or an array of tags')
  console.log(tag) 
  return tag;
}

export default eventTag;
