const {Repository,Activity} = require("../scripts/modelos");

// Repository deberia ser una clase 
// repositorio deberia ser una instancia de la clase Repository
// deberia tener un metodo llamado getAllActivities
// deberia tener un metodo llamado createActivity
// deberia tener un metodo llamado deleteActivity
// El metodo createActivity deberia poder agregar un elemento a la lista
// El metodo getAllActivities deberia generar un Array
// El metodo deleteActivity deberia eliminar un elemento de la lista

describe("Repository", () =>{

  const repositorio = new Repository;

  it("Repository deberia ser una clase", function(){
    expect(typeof Repository).toBe("function");
  });
 
  it("repositorio deberia ser una instancia de la clase Repository", function(){
    expect(repositorio instanceof Repository).toBe(true);
  });

  it("deberia tener un metodo llamado getAllActivities", function(){
    expect(typeof repositorio.getAllActivities).toBe("function");
  });

  it("deberia tener un metodo llamado createActivity", function(){
    expect(typeof repositorio.createActivity).toBe("function");
  });

  it("deberia tener un metodo llamado deleteActivity", function(){
    expect(typeof repositorio.deleteActivity).toBe("function");
  });

  it("El metodo createActivity deberia poder agregar un elemento a la lista",() =>{

    repositorio.createActivity(
      "Test Title",
      "Test Description",
      "http://test.com/image.jpg"
    )

    expect(repositorio.getAllActivities().length).toBe(1);
    expect(repositorio.getAllActivities()[0].title).toBe("Test Title");
  });

  it("El metodo getAllActivities deberia generar un Array",()=>{
    expect(Array.isArray(repositorio.getAllActivities())).toBeTrue();
  });

  it("El metodo deleteActivity deberia eliminar un elemento de la lista",()=>{
    repositorio.createActivity("test prueba","descripcion de prueba","http://test.com/img.jpg");
    repositorio.deleteActivity("test prueba");
    expect(repositorio.getAllActivities()).not.toContain("test prueba");
});

});