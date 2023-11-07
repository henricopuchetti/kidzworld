import Form from 'react-bootstrap/Form';

function FormCad() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5"> <h5>jjProdutokidz</h5></Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock">
           jjjAcima digite o id do produto.
      </Form.Text>
      <br/>
      <Form.Label htmlFor="inputPassword5"> <h5>jjDescrição</h5> </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock">
           jjjAcima digite a descrição do produto.
      </Form.Text>
      <br/>
      <Form.Label htmlFor="inputPassword5"> <h5>jjMarca</h5> </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock">
           jjjAcima digite a marca do produto.
      </Form.Text>
      <br/>
      <Form.Label htmlFor="inputPassword5"> <h5>jjData de Fabricação</h5> </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock">
           jjjAcima digite a data de fabricação do produto.
      </Form.Text>
      <br/>
      <Form.Label htmlFor="inputPassword5"> <h5>jjQuantidade Estoque</h5> </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock">
           jjjAcima digite a quantidade de estoque do produto.
      </Form.Text>
    
    </>
  );
}

export default FormCad;