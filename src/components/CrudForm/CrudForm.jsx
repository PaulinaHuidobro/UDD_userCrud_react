export const CrudForm = ({handleSubmit, name, setName, lastName, setlastName, rut, setRut, email, setEmail, age, setAge, phone, setPhone, button}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label  className="form-label">Name</label >
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">Last Name</label >
          <input
            type="text"
            value={lastName}
            onChange={(event) => setlastName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">Rut</label >
          <input
            type="text"
            value={rut}
            onChange={(event) => setRut(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">Email</label >
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">Age</label >
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">Phone</label >
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">{button}</button>
      </form>
    );
}