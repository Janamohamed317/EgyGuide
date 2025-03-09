import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Users.module.css';

function Users() {
    const [usersList, setUsersList] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [deletingUser, setDeletingUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => {
                setUsersList(res.data);
              
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            
                
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then(() => {
                setUsersList(usersList.filter(user => user.id !== id));
                setDeletingUser(null);
            })
            .catch(error => {
                console.error('Error deleting item:', error);
   
            });
    };

    const handleUpdate = (id, updatedUser) => {
        axios.patch(`http://localhost:3001/users/${id}`, updatedUser)
            .then(res => {
                setUsersList(usersList.map(user =>
                    user.id === id ? { ...user, ...updatedUser } : user
                ));
                setEditingUser(null);
            })
            .catch(error => {
                console.error('Error updating user:', error);
                
            });
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            trips: e.target.trips.value.split(','),
        };
        handleUpdate(editingUser.id, updatedUser);
    };


    return (
        <div className={styles.main_container}>
            {editingUser && (
                <div className={styles.edit_form_container}>
                    <form onSubmit={handleUpdateSubmit} className={styles.edit_form}>
                        <h3>Edit User</h3>
                        <label>Username</label>
                        <input
                            name="name"
                            defaultValue={editingUser.name}
                            placeholder="Name"
                            required
                        />
                        <label>Email</label>
                        <input
                            name="email"
                            defaultValue={editingUser.email}
                            placeholder="Email"
                            required
                        />
                        <label>Trips</label>
                        <input
                            name="trips"
                            defaultValue={editingUser.trips.join(',')}
                            placeholder="Trips (comma-separated)"
                        />
                        <button type="submit" className="btn btn-danger">Save</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setEditingUser(null)}>Cancel</button>
                    </form>
                </div>
            )}
            {deletingUser && (
                <div className={styles.delete_container}>
                    <div className={styles.delete_msg}>
                        <p>Are you sure you want to delete this user?</p>
                        <button className="btn btn-danger me-2" onClick={() => handleDelete(deletingUser)}>Yes</button>
                        <button className="btn btn-secondary" onClick={() => setDeletingUser(null)}>Cancel</button>
                    </div>
                </div>
            )}
            <div className={styles.table_responsive}>
                <table className={styles.table}>
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Trips</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.trips.map((trip, index) => (
                                        <span key={index} className="badge bg-secondary me-1">{trip}</span>
                                    ))}
                                </td>
                                <td>
                                    <button className={styles.del_btn} onClick={() => setDeletingUser(user.id)}>Delete</button>
                                    <button className={styles.edit_btn} onClick={() => setEditingUser(user)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;