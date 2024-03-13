import { InputDescription } from "./Inputs";
import { InputValue } from "./Inputs";
import { SelectOption } from "./Inputs";
import { ButtonInvite } from "./Inputs";
import { OptionsSelect } from "./Inputs";

const inputs = ({ formData, setFormData }) => {
  return (
    <div className="containerForm">
      <div className="containerDescription">
        <label className="text-style-body" htmlFor="description-Input">
          Descrição
        </label>
        <InputDescription
          required
          className="text-style-headline"
          id="description-Input"
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          placeholder="Digite aqui sua descrição"
        ></InputDescription>
        <p className="text-help">Ex: Compra de roupas</p>
      </div>
      <div className="containerValue">
        <label className="text-style-body" htmlFor="value-Input">
          Valor (R$)
        </label>
        <InputValue
          required
          id="value-Input"
          type="number"
          value={formData.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              value: e.target.value,
            })
          }
        ></InputValue>
        <p className="text-help">Ex: Tipo de valor</p>
      </div>
      <div className="conatainerSelect">
        <label className="text-style-body" htmlFor="type-Value">
          Tipo de Valor
        </label>
        <SelectOption
          required
          className="selectText"
          name="text-style-headline"
          id="type-Value"
          value={formData.type}
          onChange={(e) =>
            setFormData({
              ...formData,
              type: e.target.value,
            })
          }
        >
          <OptionsSelect className="selectText">
            Escolha uma Opção
          </OptionsSelect>
          <OptionsSelect className="selectText" value="Entrada">
            Entrada
          </OptionsSelect>
          <OptionsSelect className="selectText" value="Saida">
            Saida
          </OptionsSelect>
        </SelectOption>
      </div>
      <ButtonInvite className="button-text-form">Inserir Valor</ButtonInvite>
    </div>
  );
};

export default inputs;
